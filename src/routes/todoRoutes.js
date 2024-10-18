const { Router } = require("express");
const { register, login, authenticate } = require("../auth");
const User = require("../entity/User");
const Task = require("../entity/Task");

const router = Router();

// Criar conta
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  await register(name, email, password);
  res.status(201).send("Usuário criado com sucesso");
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await login(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// Listar tasks
router.get("/tasks", authenticate, async (req, res) => {
  const tasks = await Task.find({ where: { user: { id: req.userId } } });
  res.json(tasks);
});

// Criar task
router.post("/tasks", authenticate, async (req, res) => {
  const { title, description } = req.body;
  const task = new Task();
  task.title = title;
  task.description = description;
  task.user = { id: req.userId }; // Associar a task ao usuário
  await task.save();
  res.status(201).send("Task criada com sucesso");
});

// Editar task
router.put("/tasks/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  
  const task = await Task.findOne(id);
  if (!task) return res.status(404).send("Task não encontrada");
  
  task.title = title;
  task.description = description;
  await task.save();
  
  res.send("Task atualizada com sucesso");
});

// Deletar task
router.delete("/tasks/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  
  const task = await Task.findOne(id);
  if (!task) return res.status(404).send("Task não encontrada");
  
  await task.remove();
  res.send("Task deletada com sucesso");
});

// Marcar task como concluída
router.patch("/tasks/:id/complete", authenticate, async (req, res) => {
  const { id } = req.params;
  
  const task = await Task.findOne(id);
  if (!task) return res.status(404).send("Task não encontrada");
  
  task.completed = true;
  await task.save();
  res.send("Task marcada como concluída");
});

// Desmarcar task como concluída
router.patch("/tasks/:id/incomplete", authenticate, async (req, res) => {
  const { id } = req.params;
  
  const task = await Task.findOne(id);
  if (!task) return res.status(404).send("Task não encontrada");
  
  task.completed = false;
  await task.save();
  res.send("Task desmarcada como concluída");
});

// Filtrar tasks pelo status
router.get("/tasks/filter/:status", authenticate, async (req, res) => {
  const { status } = req.params;
  const completed = status === "completed";

  const tasks = await Task.find({ where: { user: { id: req.userId }, completed } });
  res.json(tasks);
});

module.exports = router;

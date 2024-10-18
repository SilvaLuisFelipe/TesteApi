const express = require('express');
const Task = require('../entity/Task');
const authenticateToken = require('../routes/auth');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar task' });
  }
});

module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getConnection } = require('typeorm'); // Importando getConnection
const User = require('../entity/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    // Use o repositório do TypeORM para criar e salvar o usuário
    const userRepository = getConnection().getRepository(User);
    const user = userRepository.create({ name, email, password: hashedPassword });
    await userRepository.save(user); // Salve o usuário no banco de dados

    res.status(201).json(user);
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(400).json({ error: 'Erro ao registrar usuário' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRepository = getConnection().getRepository(User); // Repositório do usuário
    const user = await userRepository.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: user.id }, 'seu_segredo_aqui', { expiresIn: '1h' });
    res.json({ user, token });
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

router.post('/hello', (req, res) => {
  res.send({hello: 'World!'});
})

module.exports = router;

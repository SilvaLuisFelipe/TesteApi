require('reflect-metadata');
const app = require('./src/server');
const { DataSource } = require('typeorm');
const User = require('./src/entity/User');
const Task = require('./src/entity/Task');

// Configuração do banco de dados
const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '201233',
  database: 'todo_list',
  synchronize: true,
  entities: [User, Task],
});

// iniciar o banco de dados e iniciar o servidor
AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao banco de dados!');

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => console.log('Erro ao conectar ao banco:', error));

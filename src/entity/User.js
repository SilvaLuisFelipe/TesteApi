const { EntitySchema } = require('typeorm');
const Task = require('./Task');

const User = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
      nullable: false, // Adicione conforme necessário
    },
    email: {
      type: String,
      unique: true,
      nullable: false, // Adicione conforme necessário
    },
    password: {
      type: String,
      nullable: false, // Adicione conforme necessário
    },
  },
  relations: {
    tasks: {
      type: 'one-to-many',
      target: 'Task',
      inverseSide: 'user',
      cascade: true,
    },
  },
});

module.exports = User;



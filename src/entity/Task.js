const { EntitySchema } = require('typeorm');

const Task = new EntitySchema({
  name: 'Task',
  tableName: 'tasks',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
      nullable: false, // Adicione conforme necessário
    },
    description: {
      type: String,
      nullable: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Number,
      nullable: false, // Ou true, dependendo da lógica do seu aplicativo
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'tasks',
      joinColumn: { name: 'userId', referencedColumnName: 'id' },
    },
  },
});

module.exports = Task;


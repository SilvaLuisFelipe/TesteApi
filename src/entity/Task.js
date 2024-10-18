const { EntitySchema } = require("typeorm");
const User = require("./User");

const Task = new EntitySchema({
  name: "Task", // Nome da entidade
  tableName: "tasks", // Nome da tabela no banco de dados
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true, // Chave primária auto gerada
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      nullable: true, // Campo pode ser nulo
    },
    completed: {
      type: Boolean,
      default: false, // Valor padrão
    },
  },
  relations: {
    user: {
      type: "many-to-one", // Relacionamento muitos-para-um
      target: () => User,
      inverseSide: "tasks", // Referência ao lado inverso da relação
      cascade: true, // Habilitar o cascade se necessário
    },
  },
});

module.exports = Task;


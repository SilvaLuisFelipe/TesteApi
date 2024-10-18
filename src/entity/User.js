const { EntitySchema } = require('typeorm');
const Task = require('./Task'); // Importar a entidade relacionada (caso precise para o lado inverso)

const User = new EntitySchema({
  name: 'User', // Nome da entidade
  tableName: 'users', // Nome da tabela no banco de dados
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true, // Chave primária auto-gerada
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true, // Garante que o email seja único
    },
    password: {
      type: String,
    },
  },
  relations: {
    tasks: {
      type: 'one-to-many', // Relacionamento um-para-muitos
      target: 'Task', // Nome da entidade relacionada
      inverseSide: 'user', // Referência ao lado inverso
      cascade: true, // Habilitar cascata se necessário
    },
  },
});

module.exports = User;


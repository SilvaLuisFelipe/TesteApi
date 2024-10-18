const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./entity/User');
const Task = require('./entity/Task');
const typeorm = require('typeorm')

const app = express();
const PORT = process.env.PORT || 3000;

typeorm.createConnection({
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "201233",
  "database": "todo_list",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/*.js"]
}
)

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const taskRoutes = require('./entity/tasks');

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const swagger = require('./swagger');
swagger(app);

module.exports = app
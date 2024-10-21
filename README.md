1. Abra o terminal e clone meu repositório do GitHub:

2. Navegue até o diretório do projeto: "cd TesteApi"

3. Dentro do diretório do projeto, execute o seguinte comando para instalar as dependências listadas no package.json: "npm install"

4. Acesse o MySQL e crie um novo banco de dados (se quiser pode usar o mesmo nome que eu utilizei 'todo_list')

5. No projeto, localize o arquivo de configuração do banco de dados "server.js", e atualize as credenciais (usuário, senha, nome do banco de dados).

6. Caso tudo estiver correto, voce pode inializar utilizando "npm start" ou acessar o editor de codigo e ir na pasta "index" e rodar o programa.

7. O servidor deve estar rodando na porta 3000. Você verá uma mensagem no terminal informando: "Servidor rodando na porta 3000".

8. Use uma ferramenta como **Postman** ou **Insomnia** para testar a API. Aqui estão alguns exemplos de requisições:

**Base: http://localhost:3000/users**

Método HTTP	Rota	Descrição
POST	/users	Cria um novo usuário
GET	/users	Lista todos os usuários
GET	/users/:id	Obtém um usuário específico
PUT	/users/:id	Atualiza dados de um usuário
DELETE	/users/:id	Deleta um usuário específico
---------------------------------------------------------
**Base: http://localhost:3000/tasks**

Método HTTP	Rota	Descrição
POST	/tasks	Cria uma nova tarefa
GET	/tasks	Lista todas as tarefas
GET	/tasks/:id	Obtém uma tarefa específica
PUT	/tasks/:id	Atualiza uma tarefa
DELETE	/tasks/:id	Deleta uma tarefa específica
----------------------------------------------------------



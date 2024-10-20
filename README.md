1. Abra o terminal e clone meu repositório do GitHub:

2. Navegue até o diretório do projeto: "cd TesteApi"

3. Dentro do diretório do projeto, execute o seguinte comando para instalar as dependências listadas no package.json: "npm install"

4. Acesse o MySQL e crie um novo banco de dados (se quiser pode usar o mesmo nome que eu utilizei 'todo_list')

5. No projeto, localize o arquivo de configuração do banco de dados "server.js", e atualize as credenciais (usuário, senha, nome do banco de dados).

6. Caso tudo estiver correto, voce pode inializar utilizando "npm start" ou acessar o editor de codigo e ir na pasta "index" e rodar o programa.

7. O servidor deve estar rodando na porta 3000. Você verá uma mensagem no terminal informando: "Servidor rodando na porta 3000".

8. Use uma ferramenta como **Postman** ou **Insomnia** para testar a API. Aqui estão alguns exemplos de requisições:

1. **Criar Usuário** (POST `http://localhost:3000/api/auth/users`):
   ```json
   {
     "name": "Nome do Usuário",
     "email": "usuario@example.com",
     "password": "senha"
   }
   ```

2. **Login** (POST `http://localhost:3000/api/auth/login`):
   ```json
   {
     "email": "usuario@example.com",
     "password": "senha"
   }
   ```

3. **Criar Tarefa** (POST `http://localhost:3000/api/auth/tasks`):
   ```json
   {
     "title": "Título da Tarefa",
     "description": "Descrição da Tarefa"
   }
   ```





Gofisio App Backend
Backend do projeto Gofisio App, desenvolvido em Node.js + TypeScript + PostgreSQL para gerenciar usuários, profissionais, serviços e agendamentos da plataforma.

📌 Finalidade
A API tem como principal objetivo fornecer uma base sólida para:

Cadastro e gerenciamento de usuários
Cadastro de profissionais e seus serviços
Agendamento de atendimentos
Controle de horários e status dos atendimentos
🚀 Tecnologias & Dependências
Node.js
TypeScript
Express
PG Promise (conexão com PostgreSQL)
PostgreSQL
UUID (para ID’s em algumas tabelas)
ts-node (para rodar TypeScript direto)
Nodemon (hot reload)
dotenv (variáveis de ambiente)
Dependências principais:
json
Copiar
Editar
"dependencies": {
  "express": "^4.x",
  "pg-promise": "^10.x",
  "cors": "^2.x",
  "uuid": "^9.x"
},
"devDependencies": {
  "typescript": "^5.x",
  "ts-node": "^10.x",
  "nodemon": "^3.x",
  "@types/node": "^20.x",
  "@types/express": "^4.x",
  "@types/cors": "^2.x"
}
🏗️ Estrutura de Pastas
bash
Copiar
Editar
src/
├── shared/
│   └── database.ts        # Configuração do PG Promise
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.repository.ts
│   ├── users.router.ts
│   └── model/
│       └── users.ts       # Tipagem dos usuários
├── professionals/
├── services/
├── appointments/
├── app.ts                 # Configuração principal do Express
└── index.ts               # Ponto de entrada
🗄️ Banco de Dados
Estrutura da Tabela users
sql
Copiar
Editar
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL
);
Para configurar um novo banco PostgreSQL via Docker:

bash
Copiar
Editar
docker run --name pg-17 --restart always -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:17
Conexão:
O arquivo database.ts já contém as credenciais padrão:

ts
Copiar
Editar
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'password'
});
📖 API Endpoints
Método	Rota	Descrição
GET	/users	Lista todos os usuários
GET	/users/:id	Busca usuário por ID
POST	/users	Cria um novo usuário
PATCH	/users/:id	Atualiza parcialmente
PUT	/users/:id	Atualiza todos os campos
DELETE	/users/:id	Remove usuário
▶️ Como rodar
bash
Copiar
Editar
# Instalar dependências
npm install

# Ambiente Dev
npm run dev


```sh
docker run --name pg-17 --restart always -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:17
```

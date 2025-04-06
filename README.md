# Gofisio App Backend

Backend do projeto **Gofisio App**, desenvolvido com **Node.js + TypeScript + PostgreSQL**, para gerenciar usuários, profissionais, serviços e agendamentos da plataforma.

## 🔖 Finalidade

A API tem como principal objetivo fornecer uma base sólida para:

- Cadastro e gerenciamento de usuários
- Cadastro de profissionais e seus serviços
- Agendamento de atendimentos
- Controle de horários e status dos atendimentos

## 🛠️ Tecnologias & Dependências

- **Node.js**
- **TypeScript**
- **Express**
- **PG-Promise** (conexão PostgreSQL)
- **PostgreSQL**
- **UUID** (para IDs em algumas tabelas)
- **ts-node** (para rodar TypeScript direto)
- **Nodemon** (hot reload)
- **dotenv** (variáveis de ambiente)

### Dependências principais:
```json
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
```

---

## 📂 Estrutura de Pastas

```
src/
├── shared/
│   └── database.ts              # Configuração do PG-Promise (conexão PostgreSQL)
│
├── users/
│   ├── users.controller.ts      # Controller de usuários
│   ├── users.service.ts         # Service (lógica)
│   ├── users.repository.ts      # Repository (acesso DB)
│   └── users.router.ts          # Definição de rotas
│
├── professionals/              # (Em desenvolvimento)
├── services/                   # (Em desenvolvimento)
├── appointments/               # (Em desenvolvimento)
├── model/
│   └── users.ts                # Tipagem dos usuários
├── app.ts                      # Configuração principal do Express
└── index.ts                    # Ponto de entrada do app
```

---

## 🏛️ Banco de Dados (PostgreSQL)

### Estrutura da Tabela `users`:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```

### Comando para subir PostgreSQL via Docker:

```bash
docker run --name pg-17 --restart always -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:17
```

Conexão configurada no arquivo `database.ts` com credenciais padrão:

```ts
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'password'
});
```

---

## 🔍 API Endpoints

| Método | Rota         | Descrição                       |
|--------|--------------|----------------------------------|
| GET    | /users       | Lista todos os usuários          |
| GET    | /users/:id   | Busca usuário por ID             |
| POST   | /users       | Cria um novo usuário             |
| PATCH  | /users/:id   | Atualiza parcialmente um usuário |
| PUT    | /users/:id   | Atualiza todos os campos          |
| DELETE | /users/:id   | Remove usuário                   |

### 📅 Exemplos de uso com HTTPie:

**Criar um usuário:**
```bash
http POST :3000/users name="João da Silva" phone="(11) 98765-4321" email="joao.silva@example.com"
```

**Buscar todos os usuários:**
```bash
http GET :3000/users
```

**Buscar por ID:**
```bash
http GET :3000/users/1
```

---

## 📁 Instalar dependências

```bash
npm install
```

---

## 🛠️ Rodar o servidor

Modo desenvolvimento com hot reload:
```bash
npm run dev
```

Modo produção:
```bash
npm start
```



```sh
docker run --name pg-17 --restart always -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:17
```

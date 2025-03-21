# Gofisio App Backend

Backend do projeto **Gofisio App**, desenvolvido com **Node.js + TypeScript + PostgreSQL**, para gerenciar usuários, profissionais, serviços e agendamentos da plataforma.

---

## 🚀 Finalidade

A API fornece uma base sólida para:

- Cadastro e gerenciamento de **usuários**
- Cadastro de **profissionais** e seus serviços
- Controle de **agendamentos** e horários

---

## 🛠️ Tecnologias & Dependências

- Node.js
- TypeScript
- Express
- PG-Promise (conexão PostgreSQL)
- UUID (para geração de IDs)
- ts-node (execução TS direto)
- Nodemon (hot reload)
- dotenv (variáveis ambiente)

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





```sh
docker run --name pg-17 --restart always -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:17
```

# Gofisio App Backend
# Backend do projeto Gofisio App, desenvolvido com Node.js + TypeScript + PostgreSQL, para gerenciar usuários, profissionais, serviços e # # # # Agendamentos da plataforma.


src/
 ├── shared/
 │    └── database.ts      # Configuração do PG-Promise
 │
 ├── users/
 │    ├── users.controller.ts
 │    ├── users.service.ts
 │    ├── users.repository.ts
 │    ├── users.router.ts
 │    └── model/
 │         └── users.ts    # Tipagem do usuário
 │
 ├── professionals/        # Em desenvolvimento
 ├── services/             # Em desenvolvimento
 ├── appointments/         # Em desenvolvimento
 │
 ├── app.ts                # Configuração principal do Express
 └── index.ts              # Ponto de entrada


```sh
docker run --name pg-17 --restart always -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:17
```

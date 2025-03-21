import express, { Express, Response } from "express";
import cors from "cors";
import usersRouter from "./users/users.router"; // Importação default correta
import { Database } from "./shared/database";

class App {
  private readonly PORT = 3000;
  private _app: Express;
  private database: any;

  constructor() {
    this._app = express();
  }

  public configure() {
    // Conecta com o banco de dados
    this.database = new Database();

    // Configura o app para receber e enviar JSON
    this._app.use(express.json());
    this._app.use(cors());

    // Health Check
    this._app.get("/health", (_, res: Response) => {
      res.send({ status: "OK" });
    });

    // Rotas
    this._app.use("/users", usersRouter); // <-- Apenas passa direto sem ()
  }

  public start() {
    this._app.listen(this.PORT, (error) => {
      if (error) {
        console.log("Erro ao iniciar servidor:", error);
      }
      console.log(`Servidor iniciado na porta ${this.PORT}`);
    });
  }

  public async stop() {
    await this.database.closeConnection();
  }
}

export const app = new App();

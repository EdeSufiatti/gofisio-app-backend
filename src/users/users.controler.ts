import { Request, Response } from "express";
import { User } from "../shared/model/users";
import { UsersService } from "./users.service";

export class UsersController {
  private service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
  }

  // Criar usuário
  async createUser(req: Request<{}, {}, User>, res: Response) {
    try {
      const user = req.body;
      const newUser = await this.service.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(400).json({ error: true, message: error });
    }
  }

  // Buscar todos usuários
  async getUsers(_: Request, res: Response) {
    try {
      const users = await this.service.getAll();
      res.status(200).send(users);
    } catch (error) {
      console.log("Error - UsersController>getUsers", error);
      res.status(500).send({ error: true, message: error });
    }
  }

  // Buscar usuário por ID
  async getUserById(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).send({ error: true, message: "Informe o ID do usuário" });
        return;
      }
      const userId = parseInt(id);
      if (isNaN(userId)) {
        res.status(400).send({ error: true, message: "Informe um ID válido" });
        return;
      }
      const user = await this.service.getById(userId);
      if (!user) {
        res.status(404).send({ error: true, message: "Usuário não encontrado" });
        return;
      }
      res.status(200).send(user);
    } catch (error) {
      console.log("Error - UsersController>getUserById", error);
      res.status(500).send({ error: true, message: error });
    }
  }

  // Atualizar parcialmente usuário (PATCH)
  async updatePartOfUser(req: Request<{ id: string }, {}, User>, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).send({ error: true, message: "Informe o ID do usuário" });
        return;
      }
      const userId = parseInt(id);
      if (isNaN(userId)) {
        res.status(400).send({ error: true, message: "Informe um ID válido" });
        return;
      }
      const user = req.body;
      const updatedUser = await this.service.updatePartOfUser(userId, user);
      res.status(200).send(updatedUser);
    } catch (error) {
      console.log("Error - UsersController>updatePartOfUser", error);
      res.status(500).send({ error: true, message: error });
    }
  }

  // Atualizar todos campos usuário (PUT)
  async updateAllFieldsUser(req: Request<{ id: string }, {}, User>, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).send({ error: true, message: "Informe o ID do usuário" });
        return;
      }
      const userId = parseInt(id);
      if (isNaN(userId)) {
        res.status(400).send({ error: true, message: "Informe um ID válido" });
        return;
      }
      const user = req.body;
      const updatedUser = await this.service.updateUser(userId, user);
      res.status(200).send(updatedUser);
    } catch (error) {
      console.log("Error - UsersController>updateAllFieldsUser", error);
      res.status(500).send({ error: true, message: error });
    }
  }

  // Deletar usuário
  async deleteUser(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).send({ error: true, message: "Informe o ID do usuário" });
        return;
      }
      const userId = parseInt(id);
      if (isNaN(userId)) {
        res.status(400).send({ error: true, message: "Informe um ID válido" });
        return;
      }
      await this.service.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      console.log("Error - UsersController>deleteUser", error);
      res.status(500).send({ error: true, message: error });
    }
  }
}

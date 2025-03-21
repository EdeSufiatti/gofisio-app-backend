import { Request, Response } from "express";
import { UsersRepository } from "./users.repository";
import { User } from "../shared/model/users";

export class UsersController {
  private usersRepository: UsersRepository;

  constructor(database: any) {
    this.usersRepository = new UsersRepository(database);
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      const newUser = await this.usersRepository.create(user);
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).send({
        error: "Error creating user",
        details: error.message || error,
      });
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.usersRepository.getAll();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).send({
        error: "Error fetching users",
        details: error.message || error,
      });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.usersRepository.getById(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).send({
        error: "Error fetching user",
        details: error.message || error,
      });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const userUpdates: Partial<User> = req.body;
      const updatedUser = await this.usersRepository.update(id, userUpdates);
      if (!updatedUser) {
        return res.status(404).send({ error: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(500).send({
        error: "Error updating user",
        details: error.message || error,
      });
    }
  };

  updateUserPartOf = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const partialUpdates: Partial<User> = req.body;
      const updatedUser = await this.usersRepository.updatePartOf(id, partialUpdates);
      if (!updatedUser) {
        return res.status(404).send({ error: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(500).send({
        error: "Error updating user partially",
        details: error.message || error,
      });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await this.usersRepository.delete(id);
      if (!deleted) {
        return res.status(404).send({ error: "User not found" });
      }
      res.status(200).send({ message: "User deleted successfully" });
    } catch (error: any) {
      res.status(500).send({
        error: "Error deleting user",
        details: error.message || error,
      });
    }
  };
}

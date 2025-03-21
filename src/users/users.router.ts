import express from "express";
import { Database } from "../shared/database";
import { UsersController } from "./users.controler";

const router = express.Router();

// Instanciando o Controller com a conexão do banco
const usersController = new UsersController(Database);

// Rotas:
router.post("/users", usersController.createUser);
router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUserById);
router.put("/users/:id", usersController.updateUser);
router.patch("/users/:id", usersController.updateUserPartOf);
router.delete("/users/:id", usersController.deleteUser);

export default router;

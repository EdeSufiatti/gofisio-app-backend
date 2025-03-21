import { Router } from "express";
import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";
import { Database } from "../shared/database";
import { UsersController } from "./users.controler";

const router = Router();

// Correção aqui: criando uma instância de Database
const database = new Database();
const repository = new UsersRepository(database);
const service = new UsersService(repository);
const controller = new UsersController(service);

router.post("/", (req, res) => controller.createUser(req, res));
router.get("/", (req, res) => controller.getUsers(req, res));
router.get("/:id", (req, res) => controller.getUserById(req, res));
router.patch("/:id", (req, res) => controller.updatePartOfUser(req, res));
router.put("/:id", (req, res) => controller.updateAllFieldsUser(req, res));
router.delete("/:id", (req, res) => controller.deleteUser(req, res));

export default router;

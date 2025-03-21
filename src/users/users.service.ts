import { UsersRepository } from "./users.repository";
import { User } from "../shared/model/users";

export class UsersService {
  private usersRepository: UsersRepository;

  constructor(database: any) {
    this.usersRepository = new UsersRepository(database);
  }

  // CREATE
  async createUser(user: User): Promise<User> {
    // Aqui poderiam estar validações ou regras adicionais
    return await this.usersRepository.create(user);
  }

  // GET ALL
  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.getAll();
  }

  // GET BY ID
  async getUserById(id: number): Promise<User | null> {
    return await this.usersRepository.getById(id);
  }

  // UPDATE (full)
  async updateUser(id: number, userUpdates: Partial<User>): Promise<User | null> {
    return await this.usersRepository.update(id, userUpdates);
  }

  // UPDATE PARTIAL
  async updateUserPartOf(id: number, partialUpdates: Partial<User>): Promise<User | null> {
    return await this.usersRepository.updatePartOf(id, partialUpdates);
  }

  // DELETE
  async deleteUser(id: number): Promise<boolean> {
    return await this.usersRepository.delete(id);
  }
}

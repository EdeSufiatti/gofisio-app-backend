import { User } from "../shared/model/users";
import { UsersRepository } from "./users.repository";

export class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async createUser(user: User) {
    return await this.repository.create(user);
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async getById(id: number) {
    return await this.repository.getById(id);
  }

  async updateUser(id: number, user: User) {
    await this.repository.update(id, user);
  }

  async updatePartOfUser(id: number, user: User) {
    await this.repository.updatePartOf(id, user);
  }

  async deleteUser(id: number) {
    await this.repository.deleteUser(id);
  }
}

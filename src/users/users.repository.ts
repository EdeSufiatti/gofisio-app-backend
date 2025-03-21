import { User } from "./shared/model/users.model";

export class UsersRepository {
  private database: any;

  constructor(database: any) {
    this.database = database;
  }

  async create(user: User): Promise<User> {
    const queryInsertUser = "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING id";

    const result = await this.database.query(queryInsertUser, [user.name, user.phone, user.email]);

    return { ...user, id: result.rows[0].id };
  }

  getAll(): Promise<User[]> {
    const queryGetAllUsers = "SELECT * FROM users";
    return this.database.query(queryGetAllUsers);
  }
  if(result.length === 0) {) {

  }

}

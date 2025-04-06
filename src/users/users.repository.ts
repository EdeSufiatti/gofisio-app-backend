import { User } from "../shared/model/users";


export class UsersRepository {
  private database: any;

  constructor(database: any) {
    this.database = database;
  }


  async create(user: User): Promise<User> {
    const queryInsertUser = "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING id";
    const result = await this.database.query(queryInsertUser, [user.name, user.phone, user.email]);
   return {
       ...user,
      id: result.id,
      };
  }


  async getAll(): Promise<User[]> {
    const queryGetAllUsers = "SELECT * FROM users";
    const result = await this.database.query(queryGetAllUsers);

    if (result.length === 0) {
      return [];
    }

    return result.map((user: any) => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,

    }));
  }


  async getById(id: number): Promise<User | undefined> {
      const [result] = await this.database.query("SELECT id, name, phone, email FROM users WHERE id = $1", [id]);
      if (!result) return;
      return {
      id,
      name:result.name,
      phone:result.phone,
      email:result.email
     };

  }


  async update(id: number, user: User): Promise<void> {
    try {
      const statementUpdateUser = "UPDATE users SET name = $1, phone = $2, email = $3 WHERE id = $4";
      await this.database.query(statementUpdateUser, [user.name, user.phone, user.email, id]);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  async updatePartOf(id: number, user: User): Promise<void> {
    try {
      const saved = await this.getById(id);
      if (!saved) {
        throw new Error("User não encontrado");
      }

      let userParams: User = {} as User;
      userParams.name = user.name || saved.name;
      userParams.phone = user.phone || saved.phone;
      userParams.email = user.email || saved.email;

      const statementUpdateUser = "UPDATE users SET name = $1, phone = $2, email = $3 WHERE id = $4";
      await this.database.query(statementUpdateUser, [
        userParams.name,
        userParams.phone,
        userParams.email,
        id,
      ]);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }




    async deleteUser  (id: number) {
          const user = await this.getById(id);
          if (!user) {
            throw new Error("User not found");
          }
          const statementDeleteUser = "DELETE FROM users WHERE id = $1";
          await this.database.query(statementDeleteUser, [id]);


      }



  }

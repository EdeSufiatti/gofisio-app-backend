import { Professional } from './../shared/model/professional';
import { Statement } from './../../node_modules/acorn/dist/acorn.d';
import { Professional } from "../shared/model/professional";
import { Database } from "../shared/database";


export class ProfessionalRepository {
  private database: any;

  constructor(database: any) {
    this.database = database;
  }


async create (professional: Professional):Promise<Professional>{
  const queryInsertProfessional = "INSERT INTO professionals (user_id, bio, address, image) VALUES ($1, $2, $3, $4) RETURNING id";
  const result = await this.database.one(queryInsertProfessional, [professional.user_id, professional.bio, professional.address, professional.image]);
  return {
    ...professional,
    id: result.id,
  };
}

async getAll(): Promise<Professional[]> {
  const queryGetAllProfessionals = "SELECT * FROM professionals";
  const result = await this.database.query(queryGetAllProfessionals);

  if (result.length === 0) {
    return [];
  } else {
    return result.map((professional: any) => ({
      id: professional.id,
      user_id: professional.user_id,
      bio: professional.bio,
      address: professional.address,
      image: professional.image,
    }));
  }
}

async getById(id: number): Promise<Professional | undefined> {
  const [result] = await this.database.query("SELECT * FROM professionals WHERE id = $1", [id]);
  if (!result) return;
  return {
    id: result.id,
    user_id: result.user_id,
    bio: result.bio,
    address: result.address,
    image: result.image,
  };
}


  async updatePartOf(id: number, professional: Professional): Promise<void> {
    try {
      const saved = await this.getById(id);
      if (!saved) {
        throw new Error("Profissional nao encontrado");
      }

      let professionalParams: Professional = {} as Professional;
      professionalParams.user_id = professional.user_id || saved.user_id;
      professionalParams.bio = professional.bio || saved.bio;
      professionalParams.address = professional.address || saved.address;
      professionalParams.image = professional.image || saved.image;

      const statementUpdateProfessional = "UPDATE professionals SET user_id = $1, bio = $2, address = $3, image = $4 WHERE id = $5";
      await this.database.query(statementUpdateProfessional, [
        professionalParams.user_id,
        professionalParams.bio,
        professionalParams.address,
        professionalParams.image,
        id,
      ]);
    } catch (error) {
      console.error("Error updating professional:", error);
    }
  }

  async updateProfessional(id: number, professional: Professional): Promise<void> {

    try {

      const statementUpdateProfessional = `
      UPDATE professionals
      SET user_id = $1, bio = $2, address = $3, image = $4
      WHERE id = $5
    `;
    await this.database.query(statementUpdateProfessional, [
      professional.user_id,
      professional.bio,
      professional.address,
      professional.image,
      id,
    ]);
    catch (error) {
      console.error("Error updating professional:", error);
    }
    }
  }


  async deleteProfessional(id: number) {
   const Professional = await this.getById(id);
   if (!Professional) {
     throw new Error("Profissional nao encontrado");
   }
   const statementDeleteProfessional = "DELETE FROM professionals WHERE id = $1";
   await this.database.query(statementDeleteProfessional, [id]);
  }
 

}

import { Service } from "../shared/model/service";

export class ServiceRepository {
  private database: any;

  constructor(database: any) {
    this.database = database;
  }

  async create (service: Service):Promise<Service>{
    const queryInsertService = "INSERT INTO services (professional_id, name, price, duration, description, image, periodo, hora_inicio, hora_fim) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id";
    const result = await this.database.one(queryInsertService, [service.professional_id, service.name, service.price, service.duration, service.description, service.image, service.periodo, service.hora_inicio, service.hora_fim]);
    return {
      ...service,
      id: result.id,
    };
  }







}

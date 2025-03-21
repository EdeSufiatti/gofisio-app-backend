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


  async getAll(): Promise<Service[]> {
    const queryGetAllServices = "SELECT * FROM services";
    const result = await this.database.query(queryGetAllServices);

    if (result.length === 0) {
      return [];
    }

    return result.map((service: any) => ({
      id: service.id,
      professional_id: service.professional_id,
      name: service.name,
      price: service.price,
      duration: service.duration,
      description: service.description,
      image: service.image,
      periodo: service.periodo,
      hora_inicio: service.hora_inicio,
      hora_fim: service.hora_fim,

    }))
  }

  async getById(id: number): Promise<Service | undefined> {
    const [result] = await this.database.query("SELECT * FROM services WHERE id = $1", [id]);
    if (!result) return;
    return {
      id: result.id,
      professional_id: result.professional_id,
      name: result.name,
      price: result.price,
      duration: result.duration,
      description: result.description,
      image: result.image,
      periodo: result.periodo,
      hora_inicio: result.hora_inicio,
      hora_fim: result.hora_fim,
    };
  }


  async update(id: number, service: Service): Promise<void> {

    try {
      const statementUpdateService = "UPDATE services SET name = $1, price = $2, duration = $3, description = $4, image = $5, periodo = $6, hora_inicio = $7, hora_fim = $8 WHERE id = $9";
      await this.database.query(statementUpdateService, [
        service.name,
        service.price,
        service.duration,
        service.description,
        service.image,
        service.periodo,
        service.hora_inicio,
        service.hora_fim,
        id,
      ]);
    } catch (error) {
      console.error("Erro ao atualizar o serviço:", error);
      throw error;
    }

  }
  async updatePartOf(id: number, service: Service): Promise<void> {
    try {
      // Primeiro, buscamos o serviço salvo no banco
      const saved = await this.getById(id);
      if (!saved) {
        throw new Error("Serviço não encontrado");
      }

      // Preparar o objeto com os valores atualizados ou mantidos
      const serviceParams: Service = {} as Service;

      // Comparar campo por campo
      serviceParams.name = saved.name !== service.name ? service.name : saved.name;
      serviceParams.price = saved.price !== service.price ? service.price : saved.price;
      serviceParams.duration = saved.duration !== service.duration ? service.duration : saved.duration;
      serviceParams.description = saved.description !== service.description ? service.description : saved.description;
      serviceParams.image = saved.image !== service.image ? service.image : saved.image;
      serviceParams.periodo = saved.periodo !== service.periodo ? service.periodo : saved.periodo;
      serviceParams.hora_inicio = saved.hora_inicio !== service.hora_inicio ? service.hora_inicio : saved.hora_inicio;
      serviceParams.hora_fim = saved.hora_fim !== service.hora_fim ? service.hora_fim : saved.hora_fim;

      // Executar o update com os dados ajustados
      const statementUpdateService = `
        UPDATE services
        SET name = $1, price = $2, duration = $3, description = $4, image = $5, periodo = $6, hora_inicio = $7, hora_fim = $8
        WHERE id = $9
      `;
      await this.database.query(statementUpdateService, [
        serviceParams.name,
        serviceParams.price,
        serviceParams.duration,
        serviceParams.description,
        serviceParams.image,
        serviceParams.periodo,
        serviceParams.hora_inicio,
        serviceParams.hora_fim,
        id,
      ]);
    } catch (error) {
      console.error("Erro ao atualizar o serviço:", error);
      throw error;
    }
  }


  async delete (id: number) {
    const service = await this.getById(id);
    if (!service) {
      throw new Error("Serviço nao encontrado");
    }
    const statementDeleteService = "DELETE FROM services WHERE id = $1";
    await this.database.query(statementDeleteService, [id]);
  }


}

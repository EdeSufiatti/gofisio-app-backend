import { Service } from "../shared/model/service";
import { ServiceRepository } from "./service.repository";

export class ServiceService {
  private repository: ServiceRepository;

  constructor(repository: ServiceRepository) {
    this.repository = repository;
  }

async createService(service: Service) {
  return await this.repository.create(service);
}
async getallServices() {
  return await this.repository.getAll();

}
 async getbyIdService(id: number) {
  return await this.repository.getById(id);

}
async updateService(id: number, service: Service) {
  return await this.repository.update(id, service);
}
async updatePartOfService(id: number, service: Service) {
  return await this.repository.updatePartOf(id, service);
}
async deleteService(id: number) {
  return await this.repository.delete(id);
}
}

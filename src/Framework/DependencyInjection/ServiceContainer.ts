import TaskRepository from "../../Data/Repository/TaskRepository";
import Service from "../../Data/Service";

export default class ServiceContainer {
  private services: Service[] = []

  constructor() {
    this.services = [
      new TaskRepository(),
    ];
  }

  getService(name: string): any {
    const service = this.services.filter((service: Service) => service.getName() === name)

    if (service.length !== 1) {
      throw new Error(`Unexpected numbers of services found for name ${name}: ${service.length}`)
    }

    return service[0];
  }
}

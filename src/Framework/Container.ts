import GetTasksUseCase from "../Domain/GetTasksUseCase/GetTasksUseCase";
import TaskRepository from "../Data/Repository/TaskRepository";
import GetTasksUseCaseViewInterface from "../Domain/GetTasksUseCase/GetTasksUseCaseViewInterface";
import HomeView from "./View/HomeView";
import CreateTaskView from "./View/CreateTaskView";

interface Service {
    name: string;
    implementation: any;
}

export default class Container {
    private services: Array<any> = []

    constructor(htmlContainer: HTMLElement) {
        const taskRepository: TaskRepository = new TaskRepository();
        const homeView: GetTasksUseCaseViewInterface = new HomeView(htmlContainer)

        this.services = [
            {name: TaskRepository.name, implementation: taskRepository},
            {name: GetTasksUseCase.name, implementation: new GetTasksUseCase(taskRepository, homeView)},
            {name: CreateTaskView.name, implementation: new CreateTaskView(htmlContainer)},
        ];
    }

    get(name: string): object {
        const service = this.services.filter((service: Service) => service.name === name)

        if (service.length !== 1) {
            throw new Error(`Unexpected numbers of services found for name ${name}: ${service.length}`)
        }

        return service[0].implementation;
    }
}

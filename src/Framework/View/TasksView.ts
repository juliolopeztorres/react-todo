import GetTasksUseCaseViewInterface from "../../Domain/GetTasksUseCase/GetTasksUseCaseViewInterface";
import Task from "../../Domain/Model/Task";
import TaskCollectionMapper from "../Mapper/TaskCollectionMapper";
import View from "./View";
import {ACTION_TYPE} from "../DependencyInjection/ViewContainer";
import GetTasksUseCase from "../../Domain/GetTasksUseCase/GetTasksUseCase";
import ServiceContainer from "../DependencyInjection/ServiceContainer";
import TaskRepository from "../../Data/Repository/TaskRepository";
import GetTasksUseCaseRepositoryInterface from "../../Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";
import CreateTaskUseCase from "../../Domain/CreateTaskUseCase/CreateTaskUseCase";
import CreateTaskUseCaseRepositoryInterface from "../../Domain/CreateTaskUseCase/CreateTaskUseCaseRepositoryInterface";

export default class TasksView implements View, GetTasksUseCaseViewInterface {
    private view: HTMLElement;
    private getTasksUseCase: GetTasksUseCase;
    private createTaskUseCase: CreateTaskUseCase;

    constructor(view: HTMLElement, serviceContainer: ServiceContainer) {
        this.view = view;

        const repository: TaskRepository = serviceContainer.getService(TaskRepository.name) as TaskRepository;

        this.getTasksUseCase = new GetTasksUseCase(repository as GetTasksUseCaseRepositoryInterface, this);
        this.createTaskUseCase = new CreateTaskUseCase(repository as CreateTaskUseCaseRepositoryInterface)
    }

    onTasksLoaded(tasks: Array<Task>): void {
        const createAction: ACTION_TYPE = 'onCreateTaskClicked'
        const backAction: ACTION_TYPE = '';

        this.view.innerHTML = `
        ${TaskCollectionMapper.mapForDivList(tasks)}
        <button onclick="window.location.search = '${backAction}'">Back</button>
        <button onclick="window.location.search = '${createAction}'">Create</button>
        `;
    }

    onTasksLoadedError(message: string): void {
        this.view.innerHTML = `<h3>Error: ${message}</h3>`;
    }

    render(): void {
        this.getTasksUseCase.get();
    }

    renderWithTask(task: Task): void {
        this.createTaskUseCase.create(task);
        this.render();
    }

    getName(): string {
        return TasksView.name;
    }
}

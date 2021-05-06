import GetTasksUseCaseRepositoryInterface, {GetTasksUseCaseRepositoryCallbackInterface} from "../../Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";
import Task from "../../Domain/Model/Task";
import Service from "../Service";
import CreateTaskUseCaseRepositoryInterface from "../../Domain/CreateTaskUseCase/CreateTaskUseCaseRepositoryInterface";

export default class TaskRepository implements Service,
    GetTasksUseCaseRepositoryInterface,
    CreateTaskUseCaseRepositoryInterface {
    // TODO: Store task in local storage
    private tasks: Array<Task>;

    constructor() {
        this.tasks = [
            new Task('1234', 'Task 1'),
            new Task('5678', 'Task 2'),
            new Task('9101', 'Task 3'),
        ];
    }

    get(callback: GetTasksUseCaseRepositoryCallbackInterface): void {
        setTimeout(() => {
            callback.onTasksLoaded(this.tasks)
        }, 500);
    }

    create(task: Task): void {
        this.tasks.push(task);
    }

    getName(): string {
        return TaskRepository.name;
    }
}

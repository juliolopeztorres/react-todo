import GetTasksUseCaseRepositoryInterface, {GetTasksUseCaseRepositoryCallbackInterface} from "../../Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";
import Task from "../../Domain/Model/Task";

export default class TaskRepository implements GetTasksUseCaseRepositoryInterface {
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

    create(id: string, name: string): void {
        this.tasks.push(new Task(id, name));
    }
}

import Task from "../Model/Task";

export default interface GetTasksUseCaseRepositoryInterface {
    get(callback: GetTasksUseCaseRepositoryCallbackInterface): void;
}

export interface GetTasksUseCaseRepositoryCallbackInterface {
    onTasksLoaded(tasks: Array<Task>): void;

    onTasksLoadedError(message: string): void;
}

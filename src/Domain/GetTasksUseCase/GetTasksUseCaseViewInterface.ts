import Task from "../Model/Task";

export default interface GetTasksUseCaseViewInterface {
    onTasksLoaded(tasks: Array<Task>): void;

    onTasksLoadedError(message: string): void;
}
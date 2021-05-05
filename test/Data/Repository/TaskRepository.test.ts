import TaskRepository from "../../../src/Data/Repository/TaskRepository";
import Task from "../../../src/Domain/Model/Task";
import {GetTasksUseCaseRepositoryCallbackInterface} from "../../../src/Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";

const MOCKED_TASKS = [
    {id: '1234', name: 'Task 1'},
    {id: '5678', name: 'Task 2'},
    {id: '9101', name: 'Task 3'},
];

test('Task repository should return 3 tasks', (done) => {
    const callback: GetTasksUseCaseRepositoryCallbackInterface = {
        onTasksLoaded: (tasks: Array<Task>) => {
            expect(tasks).toHaveLength(MOCKED_TASKS.length);
            expect(tasks).toEqual(MOCKED_TASKS)
            done()
        },
        onTasksLoadedError(message: string): void {}
    };

    (new TaskRepository()).get(callback);
});

test('Task repository can create', (done) => {
    const callback: GetTasksUseCaseRepositoryCallbackInterface = {
        onTasksLoaded: (tasks: Array<Task>) => {
            const expectedTasks = [...MOCKED_TASKS, {id: '9999', name: 'new'}]

            expect(tasks).toHaveLength(expectedTasks.length);
            expect(tasks).toEqual(expectedTasks)
            done()
        },
        onTasksLoadedError(message: string): void {}
    };

    const repository = new TaskRepository();
    repository.create('9999', 'new');
    repository.get(callback);
});

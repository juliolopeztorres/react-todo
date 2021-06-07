import TaskRepository from "../../../src/Data/Repository/TaskRepository";
import Task from "../../../src/Domain/Model/Task";
import {GetTasksUseCaseRepositoryCallbackInterface} from "../../../src/Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";

const MOCKED_TASKS = [
    {id: '1234', name: 'Task 1'},
    {id: '5678', name: 'Task 2'},
    {id: '9101', name: 'Task 3'},
];

const localStorageMock: Storage = new class implements Storage {
    [name: string]: any;

    readonly length: number = 3;

    clear(): void {
    }

    getItem(key: string): string | null {
        return JSON.stringify(MOCKED_TASKS);
    }

    key(index: number): string | null {
        return '';
    }

    removeItem(key: string): void {
    }

    setItem(key: string, value: string): void {
    }
}

test('Task repository should return 3 tasks', (done) => {
    const taskLoadedErrorFunction = jest.fn();
    const callback: GetTasksUseCaseRepositoryCallbackInterface = {
        onTasksLoaded: (tasks: Array<Task>) => {
            expect(tasks).toHaveLength(MOCKED_TASKS.length);
            expect(tasks).toEqual(MOCKED_TASKS)
            done()
        },
        onTasksLoadedError(): void {
            taskLoadedErrorFunction()
        }
    };

    (new TaskRepository(localStorageMock)).get(callback);
    expect(taskLoadedErrorFunction).not.toBeCalled();
});

test('Task repository can create', (done) => {
    const taskLoadedErrorFunction = jest.fn();
    const callback: GetTasksUseCaseRepositoryCallbackInterface = {
        onTasksLoaded: (tasks: Array<Task>) => {
            const expectedTasks = [...MOCKED_TASKS, {id: '9999', name: 'new'}]

            expect(tasks).toHaveLength(expectedTasks.length);
            expect(tasks).toEqual(expectedTasks)
            done()
        },
        onTasksLoadedError(): void {
            taskLoadedErrorFunction();
        }
    };

    const repository = new TaskRepository(localStorageMock);
    repository.create(new Task('9999', 'new'));
    repository.get(callback);
    expect(taskLoadedErrorFunction).not.toBeCalled();
});

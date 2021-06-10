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

    tasks = MOCKED_TASKS;

    clear(): void {
        this.tasks = MOCKED_TASKS
    }

    getItem(key: string): string | null {
        return JSON.stringify(this.tasks);
    }

    key(index: number): string | null {
        return '';
    }

    removeItem(key: string): void {
    }

    setItem(key: string, value: string): void {
        this.tasks = JSON.parse(value)
    }
}

test('Task repository should return 3 tasks', (done) => {
    const taskLoadedErrorFunction = jest.fn();
    const callback: GetTasksUseCaseRepositoryCallbackInterface = new class implements GetTasksUseCaseRepositoryCallbackInterface
    {
        onTasksLoaded(tasks: Task[]): void {
            expect(tasks).toHaveLength(MOCKED_TASKS.length);
            expect(tasks).toEqual(MOCKED_TASKS)
            done()
        }

        onTasksLoadedError(): void {
            taskLoadedErrorFunction()
        }
    };

    (new TaskRepository(localStorageMock)).get(callback);
    expect(taskLoadedErrorFunction).not.toBeCalled();
});

test('Task repository can create', (done) => {
    const taskLoadedErrorFunction = jest.fn();
    const callback: GetTasksUseCaseRepositoryCallbackInterface = new class implements GetTasksUseCaseRepositoryCallbackInterface
    {
        onTasksLoaded(tasks: Task[]): void {
            const expectedTasks = [...MOCKED_TASKS, {id: '9999', name: 'new'}]

            expect(tasks).toHaveLength(expectedTasks.length);
            expect(tasks).toEqual(expectedTasks)
            done()
        }

        onTasksLoadedError(): void {
            taskLoadedErrorFunction();
        }
    };

    const repository = new TaskRepository(localStorageMock);
    repository.create(new Task('9999', 'new'));
    repository.get(callback);
    expect(taskLoadedErrorFunction).not.toBeCalled();
});

test('Task repository can remove', (done) => {
    localStorageMock.clear();
    const repository = new TaskRepository(localStorageMock);

    repository.remove(new Task(MOCKED_TASKS[0].id, MOCKED_TASKS[0].name));

    const onTaskLoadedErrorFunction = jest.fn();
    repository.get(new class implements GetTasksUseCaseRepositoryCallbackInterface {
        onTasksLoaded(tasks: Task[]): void {
            expect(tasks).toHaveLength(2)
            expect(tasks[0]).toEqual(MOCKED_TASKS[1])
            done()
        }

        onTasksLoadedError(message: string): void {
            onTaskLoadedErrorFunction()
        }
    })

    expect(onTaskLoadedErrorFunction).not.toBeCalled()
})

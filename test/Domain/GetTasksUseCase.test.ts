import GetTasksUseCase from "../../src/Domain/GetTasksUseCase/GetTasksUseCase";
import GetTasksUseCaseViewInterface from "../../src/Domain/GetTasksUseCase/GetTasksUseCaseViewInterface";
import Task from "../../src/Domain/Model/Task";
import GetTasksUseCaseRepositoryInterface, {GetTasksUseCaseRepositoryCallbackInterface} from "../../src/Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";

test('Can get tasks', () => {
    const viewTaskLoadedFunction = jest.fn();
    const viewTaskLoadedFunctionError = jest.fn();
    const view: GetTasksUseCaseViewInterface = new class implements GetTasksUseCaseViewInterface {
        onTasksLoaded(tasks: Task[]) {
            viewTaskLoadedFunction();
            expect(tasks).toEqual([{id: '1234', name: 'myName'}]);
        }

        onTasksLoadedError(message: string) {
            viewTaskLoadedFunctionError();
        }
    };

    const repositoryCallbackFunction = jest.fn();
    const repository: GetTasksUseCaseRepositoryInterface = new class implements GetTasksUseCaseRepositoryInterface {
        get(callback: GetTasksUseCaseRepositoryCallbackInterface) {
            repositoryCallbackFunction()
            callback.onTasksLoaded([new Task('1234', 'myName')]);
        }
    };

    (new GetTasksUseCase(repository, view)).get();
    expect(repositoryCallbackFunction).toBeCalled();
    expect(viewTaskLoadedFunction).toBeCalled();
    expect(viewTaskLoadedFunctionError).not.toBeCalled();
});

test('Can get tasks error', () => {
    const viewTaskLoadedFunction = jest.fn();
    const viewTaskLoadedFunctionError = jest.fn();
    const view: GetTasksUseCaseViewInterface = new class implements GetTasksUseCaseViewInterface {
        onTasksLoaded(tasks: Task[]) {
            viewTaskLoadedFunction();
        }

        onTasksLoadedError(message: string) {
            viewTaskLoadedFunctionError();
            expect(message).toEqual('Some meaningful error')
        }
    };

    const repositoryCallbackFunction = jest.fn();
    const repository: GetTasksUseCaseRepositoryInterface = new class implements GetTasksUseCaseRepositoryInterface {
        get(callback: GetTasksUseCaseRepositoryCallbackInterface) {
            repositoryCallbackFunction()
            callback.onTasksLoadedError('Some meaningful error');
        }
    };

    (new GetTasksUseCase(repository, view)).get();

    expect(repositoryCallbackFunction).toBeCalled();
    expect(viewTaskLoadedFunction).not.toBeCalled();
    expect(viewTaskLoadedFunctionError).toBeCalled();
});

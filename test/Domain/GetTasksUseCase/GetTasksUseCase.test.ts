import GetTasksUseCase from "../../../src/Domain/GetTasksUseCase/GetTasksUseCase";
import GetTasksUseCaseViewInterface from "../../../src/Domain/GetTasksUseCase/GetTasksUseCaseViewInterface";
import Task from "../../../src/Domain/Model/Task";
import GetTasksUseCaseRepositoryInterface, {GetTasksUseCaseRepositoryCallbackInterface} from "../../../src/Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface";

test('Can get tasks', () => {
    const view: GetTasksUseCaseViewInterface = {
        onTasksLoaded(tasks: Array<Task>) {
            expect(tasks).toEqual([{id: '1234', name: 'myName'}]);
        },

        onTasksLoadedError(message: string) {
        }
    };

    const repository: GetTasksUseCaseRepositoryInterface = {
        get(callback: GetTasksUseCaseRepositoryCallbackInterface) {
            callback.onTasksLoaded([new Task('1234', 'myName')]);
        }
    };

    const useCase = new GetTasksUseCase(repository, view);

    useCase.get();
});

test('Can get tasks error', () => {
    const view: GetTasksUseCaseViewInterface = {
        onTasksLoaded(tasks: Array<Task>) {
        },

        onTasksLoadedError(message: string) {
            expect(message).toEqual('Some meaningful error')
        }
    };

    const repository: GetTasksUseCaseRepositoryInterface = {
        get(callback: GetTasksUseCaseRepositoryCallbackInterface) {
            callback.onTasksLoadedError('Some meaningful error');
        }
    };

    const useCase = new GetTasksUseCase(repository, view);

    useCase.get();
});

import CreateTaskUseCase from "../../../src/Domain/CreateTaskUseCase/CreateTaskUseCase";
import CreateTaskUseCaseRepositoryInterface
    from "../../../src/Domain/CreateTaskUseCase/CreateTaskUseCaseRepositoryInterface";
import Task from "../../../src/Domain/Model/Task";

test('Can create a task', () => {
    const repository: CreateTaskUseCaseRepositoryInterface = {
        create(task: Task) {
            expect(task).toEqual({id: '1234', name: 'myName'})
        }
    };

    (new CreateTaskUseCase(repository)).create(new Task('1234', 'myName'));
});

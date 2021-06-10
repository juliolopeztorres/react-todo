import RemoveTaskUseCase from '../../src/Domain/RemoveTaskUseCase/RemoveTaskUseCase';
import RemoveTaskUseCaseRepositoryInterface
  from '../../src/Domain/RemoveTaskUseCase/RemoveTaskUseCaseRepositoryInterface';
import Task from '../../src/Domain/Model/Task';

test('Can remove a task', () => {
  const repository = new class implements RemoveTaskUseCaseRepositoryInterface {
    remove(task: Task): void {
      expect(task).toEqual({id: '1', name: 'My name'})
    }
  };

  (new RemoveTaskUseCase(repository)).removeTask(new Task('1', 'My name'));
})

import RemoveTaskUseCaseRepositoryInterface from './RemoveTaskUseCaseRepositoryInterface';
import RemoveTaskUseCaseViewInterface from './RemoveTaskUseCaseViewInterface';
import Task from '../Model/Task';

export default class RemoveTaskUseCase {
  private repository: RemoveTaskUseCaseRepositoryInterface;
  private view: RemoveTaskUseCaseViewInterface;

  constructor(repository: RemoveTaskUseCaseRepositoryInterface, view: RemoveTaskUseCaseViewInterface) {
    this.repository = repository;
    this.view = view;
  }

  public removeTask(task: Task): void
  {
    this.repository.remove(task);
  }
}

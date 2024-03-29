import GetTasksUseCaseViewInterface from "../../Domain/GetTasksUseCase/GetTasksUseCaseViewInterface";
import Task from "../../Domain/Model/Task";
import GetTasksUseCase from "../../Domain/GetTasksUseCase/GetTasksUseCase";
import { Component, ReactNode } from 'react';
import React from "react";
import { hot } from 'react-hot-loader/root';
import TaskCollectionMapper from '../Mapper/TaskCollectionMapper';
import { Link } from "react-router-dom";
import { getRoute } from '../Service/RouteService';
import TaskRepository from '../../Data/Repository/TaskRepository';
import ServiceContainerInterface from '../DependencyInjection/ServiceContainerInterface';
import RemoveTaskUseCase from '../../Domain/RemoveTaskUseCase/RemoveTaskUseCase';

type TasksViewPropsInputType = {
  serviceContainer: ServiceContainerInterface
}

type TasksViewStateType = {
  tasks: Task[],
  errors: string[]
}

class TasksView extends Component<TasksViewPropsInputType, TasksViewStateType> implements GetTasksUseCaseViewInterface {
  private getTasksUseCase: GetTasksUseCase;
  private removeTaskUseCase: RemoveTaskUseCase;

  state: TasksViewStateType = {
    tasks: [],
    errors: []
  }

  constructor(props: TasksViewPropsInputType) {
    super(props);

    this.getTasksUseCase = new GetTasksUseCase(props.serviceContainer.getService(TaskRepository.name), this);
    this.removeTaskUseCase = new RemoveTaskUseCase(props.serviceContainer.getService(TaskRepository.name));
    this.onRemoveTaskCallback = this.onRemoveTaskCallback.bind(this);
  }

  componentDidMount(): void {
    this.getTasksUseCase.get();
  }

  onTasksLoaded(tasks: Task[]): void {
    this.setState((prevState) => {
      let newErrors = prevState.errors;
      if (tasks.length === 0) {
        newErrors.push('No tasks were found!');
      }

      return {
        tasks: tasks,
        errors: newErrors
      }
    });
  }

  onTasksLoadedError(message: string): void {
    this.setState((prevState) => {
      return {errors: [...prevState.errors, message]}
    })
  }

  onRemoveTaskCallback(task: Task): void {
    this.removeTaskUseCase.removeTask(task);
    this.setState({tasks: []}, () => {
      this.getTasksUseCase.get()
    });
  }

  render(): ReactNode {
    const {errors, tasks} = this.state

    return <React.Fragment>
      <h1>Listing tasks</h1>
      <div style={{color: 'red', display: errors.length > 0 ? 'block' : 'none'}}>
        <h3>Errors:</h3>
        <ul>
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
      </div>
      <div style={{display: tasks.length === 0 && errors.length === 0 ? 'block' : 'none'}}>Loading...</div>
      <div id={'div-tasks'} style={{display: tasks.length > 0 ? 'block' : 'none'}}>
        {TaskCollectionMapper.mapForDivList(tasks, this.onRemoveTaskCallback)}
      </div>
      <Link to={getRoute('home')}>
        <button className={'link'}>Back</button>
      </Link>
      <Link to={getRoute('createTask')}>
        <button className={'link'}>Create</button>
      </Link>

    </React.Fragment>;
  }
}

export default hot(TasksView);

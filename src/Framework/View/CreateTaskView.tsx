import { Component, ReactNode } from 'react';
import React from "react";
import { hot } from 'react-hot-loader/root';
import CreateTaskUseCase from '../../Domain/CreateTaskUseCase/CreateTaskUseCase';
import TaskMapper from '../Mapper/TaskMapper';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getRoute } from '../Service/RouteService';
import TaskRepository from '../../Data/Repository/TaskRepository';
import ServiceContainerInterface from '../DependencyInjection/ServiceContainerInterface';

type CreateTaskViewPropsInputType = {
  serviceContainer: ServiceContainerInterface
} & RouteComponentProps;

type CreateTaskViewStateType = {
  id: string,
  name: string
}

class CreateTaskView extends Component<CreateTaskViewPropsInputType, CreateTaskViewStateType> {
  private createTaskUseCase: CreateTaskUseCase;

  state: CreateTaskViewStateType = {
    id: '',
    name: ''
  }

  constructor(props: CreateTaskViewPropsInputType) {
    super(props);

    this.createTaskUseCase = new CreateTaskUseCase(props.serviceContainer.getService(TaskRepository.name));
    this.createTask = this.createTask.bind(this);
  }

  render(): ReactNode {
    const {id, name} = this.state;

    return <React.Fragment>
      <h1>Create new task</h1>
      <input data-testid={'inputId'} type="text" name="id" placeholder="Enter an id..."
             value={id}
             onChange={(value) => this.setState({id: value.target.value})}/>
      <input data-testid={'inputName'} type="text" name="name" placeholder="Enter a name..."
             value={name}
             onChange={(value) => this.setState({name: value.target.value})}/>
      <button data-testid={'buttonCreate'} type="button" onClick={this.createTask}>Create</button>
      <p>
        <Link to={getRoute('listTasks')}>
          <button className={'link'} type="button">Back</button>
        </Link>
      </p>
    </React.Fragment>;
  }

  createTask() {
    const {id, name} = this.state;

    this.createTaskUseCase.create(TaskMapper.mapForCreate(id, name));
    this.props.history.push(getRoute('listTasks'));
  }
}

export default hot(CreateTaskView);

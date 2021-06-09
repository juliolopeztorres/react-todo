import { render } from '@testing-library/react';
import TasksView from '../../../src/Framework/View/TasksView';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ServiceContainerInterface from '../../../src/Framework/DependencyInjection/ServiceContainerInterface';
import GetTasksUseCaseRepositoryInterface, { GetTasksUseCaseRepositoryCallbackInterface } from '../../../src/Domain/GetTasksUseCase/GetTasksUseCaseRepositoryInterface';
import Task from '../../../src/Domain/Model/Task';
import { expectTextAndLinkDetailsInButtons } from '../../helpers';

it('can render', () => {
  jest.useFakeTimers()

  const mockServiceContainer: ServiceContainerInterface = new class implements ServiceContainerInterface {
    getService(name: string): any {
      return new class implements GetTasksUseCaseRepositoryInterface {
        get(callback: GetTasksUseCaseRepositoryCallbackInterface): void {
          setTimeout(
            () => callback.onTasksLoaded([new Task('1', 'My name')]),
            500
          );
        }
      };
    }
  }

  const {container} = render(<BrowserRouter>
      <TasksView serviceContainer={mockServiceContainer}/>
    </BrowserRouter>
  )

  expect(container.querySelector('h1')!.innerHTML).toEqual('Listing tasks')
  expect(container.querySelector('div:nth-child(3)')!.getAttribute('style')).toEqual('display: block;')

  jest.advanceTimersByTime(1000)

  const divTasksContainer = container.querySelector('div#div-tasks > div')!.children;
  expect(divTasksContainer).toHaveLength(2)

  const pTasks = divTasksContainer.item(0)!.children;
  expect(pTasks).toHaveLength(2)

  expect(pTasks[0].innerHTML).toEqual(`<b>ID:</b> 1`)
  expect(pTasks[1].innerHTML).toEqual(`<b>Name:</b> My name`)

  const button = divTasksContainer.item(1)!.children[0];
  expect(button.innerHTML).toEqual(`Remove`)

  expectTextAndLinkDetailsInButtons(
    container.querySelectorAll('button.link'),
    [
      {buttonText: 'Back', anchorHref: '/'},
      {buttonText: 'Create', anchorHref: '/tasks/create'},
    ])
})

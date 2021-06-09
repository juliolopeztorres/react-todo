import ServiceContainerInterface from '../../../src/Framework/DependencyInjection/ServiceContainerInterface';
import Task from '../../../src/Domain/Model/Task';
import { render } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import CreateTaskView from '../../../src/Framework/View/CreateTaskView';
import CreateTaskUseCaseRepositoryInterface
  from '../../../src/Domain/CreateTaskUseCase/CreateTaskUseCaseRepositoryInterface';
import expectTagsInContainer, { expectTextAndLinkDetailsInButtons } from '../../helpers';

it('can render', () => {
  const createFunction = jest.fn();

  const mockServiceContainer: ServiceContainerInterface = new class implements ServiceContainerInterface {
    getService(name: string): any {
      return new class implements CreateTaskUseCaseRepositoryInterface {
        create(task: Task): void {
          createFunction()
        }
      };
    }
  }

  const {container, getByTestId} = render(
    <BrowserRouter>
    <Route render={(props) =>
      <CreateTaskView serviceContainer={mockServiceContainer}{...props}/>
    }/>
    </BrowserRouter>
  )

  expectTagsInContainer(container, ['h1'], ['Create new task'])
  expectTextAndLinkDetailsInButtons(
    container.querySelectorAll('button.link'),
    [
      {buttonText: 'Back', anchorHref: '/tasks'},
    ]
  )

  expect(getByTestId('inputId').getAttribute('placeholder')).toEqual('Enter an id...')
  expect(getByTestId('inputName').getAttribute('placeholder')).toEqual('Enter a name...')

  const buttonCreate = getByTestId('buttonCreate');
  expect(buttonCreate.innerHTML).toEqual('Create')
  buttonCreate.click()
  expect(createFunction).toBeCalled()
});

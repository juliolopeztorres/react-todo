import { render } from '@testing-library/react';
import DefaultView from '../../../src/Framework/View/DefaultView';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import expectTagsInContainer from '../../helpers';

it('can render', () => {
  const {container} = render(<BrowserRouter>
    <DefaultView/>
  </BrowserRouter>)

  expectTagsInContainer(
    container,
    ['h1', 'p', 'button'],
    [
      'Welcome page :_)',
      'Click on the button to get some tasks',
      'Give me some tasks',
    ])

  expect(container.querySelector('a')!.getAttribute('href')).toEqual('/tasks')
});

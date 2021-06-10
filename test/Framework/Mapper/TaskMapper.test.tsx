import TaskMapper from "../../../src/Framework/Mapper/TaskMapper";
import Task from "../../../src/Domain/Model/Task";
import React from "react";
import { render } from '@testing-library/react';

const expected = [
  `<div style="margin-bottom: 10px;">`,
  `<div>`,
  `<p><b>ID:</b> id</p>`,
  `<p><b>Name:</b> name</p>`,
  `</div>`,
  `<div style="display: inline-flex;">`,
  `<button type="button">Remove</button>`,
  `</div>`,
  `</div>`,
];

test('Can map a task', () => {
  const {container} = render(TaskMapper.mapForDivList(new Task('id', 'name')));

  expect(container.innerHTML).toEqual(expected.join(''))

});

test('Can map a task with remove callback', () => {
  let touched = false;
  const {container} = render(TaskMapper.mapForDivList(
    new Task('id', 'name'),
      task => touched = true
    )
  );

  (container.querySelector('button') as HTMLElement).click();

  expect(container.innerHTML).toEqual(expected.join(''))
  expect(touched).toEqual(true);
});

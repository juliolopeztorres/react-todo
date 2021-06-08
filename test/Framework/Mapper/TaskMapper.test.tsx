import TaskMapper from "../../../src/Framework/Mapper/TaskMapper";
import Task from "../../../src/Domain/Model/Task";
import React from "react";
import { render } from '@testing-library/react';

test('Can map a task', () => {
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

  const {container} = render(TaskMapper.mapForDivList(new Task('id', 'name')));

  expect(container.innerHTML).toEqual(expected.join(''))
});

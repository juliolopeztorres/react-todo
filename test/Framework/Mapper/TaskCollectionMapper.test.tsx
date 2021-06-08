import TaskCollectionMapper from "../../../src/Framework/Mapper/TaskCollectionMapper";
import Task from "../../../src/Domain/Model/Task";
import React from "react";
import { render } from '@testing-library/react';

test('Can map several tasks', () => {
    const expected = [
      `<div style="margin-bottom: 10px;">`,
        `<div>`,
          `<p><b>ID:</b> id1</p>`,
          `<p><b>Name:</b> name1</p>`,
        `</div>`,
        `<div style="display: inline-flex;">`,
          `<button type="button">Remove</button>`,
        `</div>`,
      `</div>`,
      `<div style="margin-bottom: 10px;">`,
        `<div>`,
          `<p><b>ID:</b> id2</p>`,
          `<p><b>Name:</b> name2</p>`,
        `</div>`,
        `<div style="display: inline-flex;">`,
          `<button type="button">Remove</button>`,
        `</div>`,
      `</div>`,
    ];

    const {container} = render(<>{TaskCollectionMapper.mapForDivList([
        new Task('id1', 'name1'),
        new Task('id2', 'name2'),
      ])}</>
    );

    expect(container.innerHTML).toEqual(expected.join(''));
  }
);

test('Can get default empty task message', () => {
    expect(TaskCollectionMapper.mapForDivList([]))
      .toEqual(<span>No tasks could have been loaded :_(</span>);
  }
);

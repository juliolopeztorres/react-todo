import TaskCollectionMapper from "../../../src/Framework/Mapper/TaskCollectionMapper";
import Task from "../../../src/Domain/Model/Task";
import React from "react";
import { render } from '@testing-library/react';

test('Can map several tasks', () => {
    const expected = [
      `<p><b>ID:</b> id1</p>`,
      `<p><b>Name:</b> name1</p>`,
      `<p><b>ID:</b> id2</p>`,
      `<p><b>Name:</b> name2</p>`,
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

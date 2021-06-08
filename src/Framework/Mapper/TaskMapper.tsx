import Task from "../../Domain/Model/Task";
import React from "react";

export default class TaskMapper {

  static mapForDivList(task: Task, onRemoveTaskCallback?: (task: Task) => void): JSX.Element {
    return <div key={task.getId()} style={{marginBottom: '10px'}}>
      <div>
        <p><b>ID:</b> {task.getId()}</p>
        <p><b>Name:</b> {task.getName()}</p>
      </div>
      <div style={{display: 'inline-flex'}}>
        <button type={'button'} onClick={() => onRemoveTaskCallback ? onRemoveTaskCallback(task) : {}}>Remove</button>
      </div>
    </div>;
  }

  static mapForCreate(id: string, name: string): Task {
    return new Task(id, name);
  }
}

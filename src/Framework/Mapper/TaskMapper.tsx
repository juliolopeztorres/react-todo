import Task from "../../Domain/Model/Task";
import React from "react";

export default class TaskMapper {

  static mapForDivList(task: Task): JSX.Element {
    return <React.Fragment key={task.getId()}>
      <p><b>ID:</b> {task.getId()}</p>
      <p><b>Name:</b> {task.getName()}</p>
    </React.Fragment>;
  }

  static mapForCreate(id: string, name: string): Task {
    return new Task(id, name);
  }
}

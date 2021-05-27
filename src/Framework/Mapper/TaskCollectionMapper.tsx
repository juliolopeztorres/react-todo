import Task from "../../Domain/Model/Task";
import TaskMapper from "./TaskMapper";
import React from "react";

export default class TaskCollectionMapper {
  static mapForDivList(tasks: Array<Task>): JSX.Element | JSX.Element[] {
    if (tasks.length === 0) {
      return <span>No tasks could have been loaded :_(</span>;
    }

    return tasks.map(task => TaskMapper.mapForDivList(task));
  }
}

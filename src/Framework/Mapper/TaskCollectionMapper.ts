import Task from "../../Domain/Model/Task";
import TaskMapper from "./TaskMapper";

export default class TaskCollectionMapper {
    static mapForDivList(tasks: Array<Task>): string {
        if (tasks.length === 0) {
            return `No tasks could have been loaded :_(`;
        }

        return tasks.map(task => TaskMapper.mapForDivList(task)).join('');
    }
}
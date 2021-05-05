import Task from "../../Domain/Model/Task";

export default class TaskMapper {

    static mapForDivList(task: Task): string
    {
        return `
<p><b>ID:</b> ${task.getId()}</p>
<p><b>Name:</b> ${task.getName()}</p>
`;
    }
}
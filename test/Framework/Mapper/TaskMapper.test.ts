import TaskMapper from "../../../src/Framework/Mapper/TaskMapper";
import Task from "../../../src/Domain/Model/Task";

test('Can map a task', () => {
    expect(TaskMapper.mapForDivList(new Task('id', 'name')))
        .toEqual(`
<p><b>ID:</b> id</p>
<p><b>Name:</b> name</p>
`
        )
});

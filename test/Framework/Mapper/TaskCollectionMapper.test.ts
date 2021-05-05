import TaskCollectionMapper from "../../../src/Framework/Mapper/TaskCollectionMapper";
import Task from "../../../src/Domain/Model/Task";

test('Can map several tasks', () => {
    expect(TaskCollectionMapper.mapForDivList([
        new Task('id1', 'name1'),
        new Task('id2', 'name2'),
    ])).toEqual(`
<p><b>ID:</b> id1</p>
<p><b>Name:</b> name1</p>

<p><b>ID:</b> id2</p>
<p><b>Name:</b> name2</p>
`
    );
});

test('Can get default empty task message', () => {
    expect(TaskCollectionMapper.mapForDivList([]))
        .toEqual(`No tasks could have been loaded :_(`);
});
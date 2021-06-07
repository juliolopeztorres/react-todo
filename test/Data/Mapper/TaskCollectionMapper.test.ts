import TaskCollectionMapper from '../../../src/Data/Mapper/TaskCollectionMapper';
import Task from '../../../src/Domain/Model/Task';

it('can map several tasks', () => {
  const testTasks = [
    {id: '1234', name: 'my task'},
    {id: '4444', name: 'my second task'}
  ];
  const tasks = TaskCollectionMapper.map(testTasks)

  expect(tasks).toHaveLength(2);

  tasks.forEach((task: Task, index: number) => {
    expect(task.getId()).toEqual(testTasks[index].id)
    expect(task.getName()).toEqual(testTasks[index].name)
  })
});

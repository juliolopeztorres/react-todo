import TaskMapper from '../../../src/Data/Mapper/TaskMapper';
import Task from '../../../src/Domain/Model/Task';

it('can map a task', () => {
  const task = TaskMapper.map({id: '1234', name: 'my task'});
  expect(task).toBeInstanceOf(Task)
  expect(task.getId()).toEqual('1234');
  expect(task.getName()).toEqual('my task');
});

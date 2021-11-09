import Task from '../../Domain/Model/Task';
var TaskMapper = /** @class */ (function () {
    function TaskMapper() {
    }
    TaskMapper.map = function (task) {
        return new Task(task.id, task.name);
    };
    return TaskMapper;
}());
export default TaskMapper;
//# sourceMappingURL=TaskMapper.js.map
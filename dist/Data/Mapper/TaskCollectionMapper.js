import TaskMapper from './TaskMapper';
var TaskCollectionMapper = /** @class */ (function () {
    function TaskCollectionMapper() {
    }
    TaskCollectionMapper.map = function (taskArray) {
        if (taskArray.length === 0) {
            return [];
        }
        var tasks = [];
        for (var _i = 0, taskArray_1 = taskArray; _i < taskArray_1.length; _i++) {
            var task = taskArray_1[_i];
            tasks.push(TaskMapper.map(task));
        }
        return tasks;
    };
    return TaskCollectionMapper;
}());
export default TaskCollectionMapper;
//# sourceMappingURL=TaskCollectionMapper.js.map
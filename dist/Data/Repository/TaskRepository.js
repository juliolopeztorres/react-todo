import TaskCollectionMapper from '../Mapper/TaskCollectionMapper';
var TaskRepository = /** @class */ (function () {
    function TaskRepository(store) {
        var _a;
        this.store = store;
        this.tasks = TaskCollectionMapper.map(JSON.parse((_a = this.store.getItem('tasks')) !== null && _a !== void 0 ? _a : "[]"));
    }
    TaskRepository.prototype.get = function (callback) {
        // setTimeout(() => {
        callback.onTasksLoaded(this.tasks);
        // }, 500);
    };
    TaskRepository.prototype.create = function (task) {
        this.tasks.push(task);
        this.store.setItem('tasks', JSON.stringify(this.tasks));
    };
    TaskRepository.prototype.remove = function (taskSearched) {
        this.tasks.splice(this.tasks.indexOf(this.tasks.filter(function (task) { return task.getId() === taskSearched.getId(); })[0]), 1);
        this.store.setItem('tasks', JSON.stringify(this.tasks));
    };
    TaskRepository.prototype.getName = function () {
        return TaskRepository.name;
    };
    return TaskRepository;
}());
export default TaskRepository;
//# sourceMappingURL=TaskRepository.js.map
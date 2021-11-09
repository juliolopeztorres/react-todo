var GetTasksUseCase = /** @class */ (function () {
    function GetTasksUseCase(repository, view) {
        this.view = view;
        this.repository = repository;
    }
    GetTasksUseCase.prototype.get = function () {
        this.repository.get(this);
    };
    GetTasksUseCase.prototype.onTasksLoaded = function (tasks) {
        this.view.onTasksLoaded(tasks);
    };
    GetTasksUseCase.prototype.onTasksLoadedError = function (message) {
        this.view.onTasksLoadedError(message);
    };
    return GetTasksUseCase;
}());
export default GetTasksUseCase;
//# sourceMappingURL=GetTasksUseCase.js.map
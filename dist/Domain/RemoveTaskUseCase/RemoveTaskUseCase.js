var RemoveTaskUseCase = /** @class */ (function () {
    function RemoveTaskUseCase(repository) {
        this.repository = repository;
    }
    RemoveTaskUseCase.prototype.removeTask = function (task) {
        this.repository.remove(task);
    };
    return RemoveTaskUseCase;
}());
export default RemoveTaskUseCase;
//# sourceMappingURL=RemoveTaskUseCase.js.map
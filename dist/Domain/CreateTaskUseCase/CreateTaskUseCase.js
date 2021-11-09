var CreateTaskUseCase = /** @class */ (function () {
    function CreateTaskUseCase(repository) {
        this.repository = repository;
    }
    CreateTaskUseCase.prototype.create = function (task) {
        this.repository.create(task);
    };
    return CreateTaskUseCase;
}());
export default CreateTaskUseCase;
//# sourceMappingURL=CreateTaskUseCase.js.map
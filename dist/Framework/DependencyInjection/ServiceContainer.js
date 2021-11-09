import TaskRepository from "../../Data/Repository/TaskRepository";
var ServiceContainer = /** @class */ (function () {
    function ServiceContainer() {
        this.services = [];
        this.services = [
            new TaskRepository(localStorage),
        ];
    }
    ServiceContainer.prototype.getService = function (name) {
        var service = this.services.filter(function (service) { return service.getName() === name; });
        if (service.length !== 1) {
            throw new Error("Unexpected numbers of services found for name " + name + ": " + service.length);
        }
        return service[0];
    };
    return ServiceContainer;
}());
export default ServiceContainer;
//# sourceMappingURL=ServiceContainer.js.map
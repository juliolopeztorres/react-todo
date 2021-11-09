import Task from "../../Domain/Model/Task";
import React from "react";
var TaskMapper = /** @class */ (function () {
    function TaskMapper() {
    }
    TaskMapper.mapForDivList = function (task, onRemoveTaskCallback) {
        if (onRemoveTaskCallback === void 0) { onRemoveTaskCallback = function (task) { }; }
        return React.createElement("div", { key: task.getId(), style: { marginBottom: '10px' } },
            React.createElement("div", null,
                React.createElement("p", null,
                    React.createElement("b", null, "ID:"),
                    " ",
                    task.getId()),
                React.createElement("p", null,
                    React.createElement("b", null, "Name:"),
                    " ",
                    task.getName())),
            React.createElement("div", { style: { display: 'inline-flex' } },
                React.createElement("button", { type: 'button', onClick: function () { return onRemoveTaskCallback(task); } }, "Remove")));
    };
    TaskMapper.mapForCreate = function (id, name) {
        return new Task(id, name);
    };
    return TaskMapper;
}());
export default TaskMapper;
//# sourceMappingURL=TaskMapper.js.map
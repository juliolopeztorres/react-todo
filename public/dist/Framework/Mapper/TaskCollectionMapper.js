import TaskMapper from "./TaskMapper";
import React from "react";
var TaskCollectionMapper = /** @class */ (function () {
    function TaskCollectionMapper() {
    }
    TaskCollectionMapper.mapForDivList = function (tasks, onRemoveTaskCallback) {
        if (tasks.length === 0) {
            return React.createElement("span", null, "No tasks could have been loaded :_(");
        }
        return tasks.map(function (task) { return TaskMapper.mapForDivList(task, onRemoveTaskCallback); });
    };
    return TaskCollectionMapper;
}());
export default TaskCollectionMapper;
//# sourceMappingURL=TaskCollectionMapper.js.map
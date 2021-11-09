var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import GetTasksUseCase from "../../Domain/GetTasksUseCase/GetTasksUseCase";
import { Component } from 'react';
import React from "react";
import { hot } from 'react-hot-loader/root';
import TaskCollectionMapper from '../Mapper/TaskCollectionMapper';
import { Link } from "react-router-dom";
import { getRoute } from '../Service/RouteService';
import TaskRepository from '../../Data/Repository/TaskRepository';
import RemoveTaskUseCase from '../../Domain/RemoveTaskUseCase/RemoveTaskUseCase';
var TasksView = /** @class */ (function (_super) {
    __extends(TasksView, _super);
    function TasksView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tasks: [],
            errors: []
        };
        _this.getTasksUseCase = new GetTasksUseCase(props.serviceContainer.getService(TaskRepository.name), _this);
        _this.removeTaskUseCase = new RemoveTaskUseCase(props.serviceContainer.getService(TaskRepository.name));
        _this.onRemoveTaskCallback = _this.onRemoveTaskCallback.bind(_this);
        return _this;
    }
    TasksView.prototype.componentDidMount = function () {
        this.getTasksUseCase.get();
    };
    TasksView.prototype.onTasksLoaded = function (tasks) {
        this.setState(function (prevState) {
            var newErrors = prevState.errors;
            if (tasks.length === 0) {
                newErrors.push('No tasks were found!');
            }
            return {
                tasks: tasks,
                errors: newErrors
            };
        });
    };
    TasksView.prototype.onTasksLoadedError = function (message) {
        this.setState(function (prevState) {
            return { errors: __spreadArray(__spreadArray([], prevState.errors), [message]) };
        });
    };
    TasksView.prototype.onRemoveTaskCallback = function (task) {
        var _this = this;
        this.removeTaskUseCase.removeTask(task);
        this.setState({ tasks: [] }, function () {
            _this.getTasksUseCase.get();
        });
    };
    TasksView.prototype.render = function () {
        var _a = this.state, errors = _a.errors, tasks = _a.tasks;
        return React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Listing tasks"),
            React.createElement("div", { style: { color: 'red', display: errors.length > 0 ? 'block' : 'none' } },
                React.createElement("h3", null, "Errors:"),
                React.createElement("ul", null, errors.map(function (error) { return React.createElement("li", { key: error }, error); }))),
            React.createElement("div", { style: { display: tasks.length === 0 && errors.length === 0 ? 'block' : 'none' } }, "Loading..."),
            React.createElement("div", { id: 'div-tasks', style: { display: tasks.length > 0 ? 'block' : 'none' } }, TaskCollectionMapper.mapForDivList(tasks, this.onRemoveTaskCallback)),
            React.createElement(Link, { to: getRoute('home') },
                React.createElement("button", { className: 'link' }, "Back")),
            React.createElement(Link, { to: getRoute('createTask') },
                React.createElement("button", { className: 'link' }, "Create")));
    };
    return TasksView;
}(Component));
export default hot(TasksView);
//# sourceMappingURL=TasksView.js.map
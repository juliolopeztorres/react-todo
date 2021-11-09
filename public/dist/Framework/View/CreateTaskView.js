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
import { Component } from 'react';
import React from "react";
import { hot } from 'react-hot-loader/root';
import CreateTaskUseCase from '../../Domain/CreateTaskUseCase/CreateTaskUseCase';
import TaskMapper from '../Mapper/TaskMapper';
import { Link } from 'react-router-dom';
import { getRoute } from '../Service/RouteService';
import TaskRepository from '../../Data/Repository/TaskRepository';
var CreateTaskView = /** @class */ (function (_super) {
    __extends(CreateTaskView, _super);
    function CreateTaskView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            id: '',
            name: ''
        };
        _this.createTaskUseCase = new CreateTaskUseCase(props.serviceContainer.getService(TaskRepository.name));
        _this.createTask = _this.createTask.bind(_this);
        return _this;
    }
    CreateTaskView.prototype.render = function () {
        var _this = this;
        var _a = this.state, id = _a.id, name = _a.name;
        return React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Create new task"),
            React.createElement("input", { "data-testid": 'inputId', type: "text", name: "id", placeholder: "Enter an id...", value: id, onChange: function (value) { return _this.setState({ id: value.target.value }); } }),
            React.createElement("input", { "data-testid": 'inputName', type: "text", name: "name", placeholder: "Enter a name...", value: name, onChange: function (value) { return _this.setState({ name: value.target.value }); } }),
            React.createElement("button", { "data-testid": 'buttonCreate', type: "button", onClick: this.createTask }, "Create"),
            React.createElement("p", null,
                React.createElement(Link, { to: getRoute('listTasks') },
                    React.createElement("button", { className: 'link', type: "button" }, "Back"))));
    };
    CreateTaskView.prototype.createTask = function () {
        var _a = this.state, id = _a.id, name = _a.name;
        this.createTaskUseCase.create(TaskMapper.mapForCreate(id, name));
        this.props.history.push(getRoute('listTasks'));
    };
    return CreateTaskView;
}(Component));
export default hot(CreateTaskView);
//# sourceMappingURL=CreateTaskView.js.map
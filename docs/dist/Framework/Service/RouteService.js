var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultView from '../View/DefaultView';
import TasksView from '../View/TasksView';
import ServiceContainer from '../DependencyInjection/ServiceContainer';
import CreateTaskView from '../View/CreateTaskView';
var serviceContainer = new ServiceContainer();
export default function RouteService() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: getRoute('home') },
                React.createElement(DefaultView, null)),
            React.createElement(Route, { exact: true, path: getRoute('listTasks') },
                React.createElement(TasksView, { serviceContainer: serviceContainer })),
            React.createElement(Route, { exact: true, path: getRoute('createTask'), render: function (props) {
                    return React.createElement(CreateTaskView, __assign({ serviceContainer: serviceContainer }, props));
                } }),
            React.createElement("h1", null, "404 - Route not found"))));
}
export function getRoute(path) {
    // generatePath('/'), // generatePath(path, parameters) -> Path string and parameters an object
    var routes = {
        home: {
            route: "/",
        },
        listTasks: {
            route: '/tasks',
        },
        createTask: {
            route: '/tasks/create',
        }
    };
    return routes[path].route;
}
//# sourceMappingURL=RouteService.js.map
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
import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { getRoute } from '../Service/RouteService';
import { Link } from "react-router-dom";
var DefaultView = /** @class */ (function (_super) {
    __extends(DefaultView, _super);
    function DefaultView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultView.prototype.render = function () {
        return React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Welcome page :_)"),
            React.createElement("div", null,
                React.createElement("p", null, "Click on the button to get some tasks"),
                React.createElement(Link, { to: getRoute('listTasks') },
                    React.createElement("button", null, "Give me some tasks"))));
    };
    return DefaultView;
}(Component));
export default hot(DefaultView);
//# sourceMappingURL=DefaultView.js.map
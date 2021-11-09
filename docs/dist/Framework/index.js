import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import RouteService from "./Service/RouteService";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(HashRouter, null,
        React.createElement(RouteService, null))), document.getElementById("app"));
//# sourceMappingURL=index.js.map
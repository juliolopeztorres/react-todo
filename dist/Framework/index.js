import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import RouteService from "./Service/RouteService";
ReactDOM.render(React.createElement(BrowserRouter, null,
    React.createElement(RouteService, null)), document.getElementById("app"));
//# sourceMappingURL=index.js.map
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import RouteService from "./Service/RouteService";

ReactDOM.render(
    <HashRouter>
        <RouteService/>
    </HashRouter>,
    document.getElementById("app")
);

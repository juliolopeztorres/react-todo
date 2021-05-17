// import ViewContainer from "./Framework/DependencyInjection/ViewContainer";
//
// (new ViewContainer(getHtmlContainer())).handleAction(window.location.search);
//
// function getHtmlContainer(): HTMLElement {
//     const container = document.getElementById('app');
//
//     if (container === null) {
//         throw new Error('No HTML container where to draw!');
//     }
//
//     return container;
// }

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

ReactDOM.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>,
    document.getElementById("app")
);

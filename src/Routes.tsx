import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from "./App";
import {RouteBuilder} from "./RouteBuilder";

export default function Routes() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={RouteBuilder('home').route}>
                    <App />
                </Route>
            </Switch>
        </div>
    );
}

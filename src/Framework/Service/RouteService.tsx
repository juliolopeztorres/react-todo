import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {generatePath} from "react-router";
import DefaultView from '../View/DefaultView';

type routes = 'home';

export default function RouteService() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={getRoute('home')}>
                    <DefaultView />
                </Route>
            </Switch>
        </div>
    );
}

function getRoute(path: routes): string {
    const routes = {
        home: {
            route: "/",
            generate: () => generatePath('/'), // generatePath(path, parameters) -> Path string and parameters an object
        },
    };

    return routes[path].route;
}

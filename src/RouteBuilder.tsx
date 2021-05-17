import {generatePath} from 'react-router';

type routes = 'home';

export const RouteBuilder = (path: routes) => {
    const generate = (path: string, parameters = {}) => {
        return generatePath(path, parameters);
    };

    const routes = {
        home: {
            route: "/",
            generate: () => generate("/"),
        },
    };

    return routes[path];
};


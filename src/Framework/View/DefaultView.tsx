import {ACTION_TYPE} from "../DependencyInjection/ViewContainer";
import React, {Component, ReactNode} from "react";
import {hot} from "react-hot-loader/root";

class DefaultView extends Component {
    // private view: HTMLElement;

    // constructor(view: HTMLElement) {
    //     this.view = view;
    // }

    render(): ReactNode {
        const defaultAction: ACTION_TYPE = 'onYopButtonClicked';

//         this.view.innerHTML = `
// <h1>Welcome page :_)</h1>
// <div>
//     <p>Click on the button to get some tasks</p>
//     <button onclick="window.location.href += '?${defaultAction}'">Yop</button>
// </div>
// `;
        return <React.Fragment>
            <h1>Welcome page :_)</h1>
            <div>
                <p>Click on the button to get some tasks</p>
                <button>Yop</button>
            </div>
        </React.Fragment>
    }

    // getName(): string {
    //     return DefaultView.name
    // }
}

export default hot(DefaultView);
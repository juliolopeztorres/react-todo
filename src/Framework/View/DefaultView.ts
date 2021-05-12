import View from "./View";
import {ACTION_TYPE} from "../DependencyInjection/ViewContainer";

export default class DefaultView implements View {
    private view: HTMLElement;

    constructor(view: HTMLElement) {
        this.view = view;
    }

    render(): void {
        const defaultAction: ACTION_TYPE = 'onYopButtonClicked';

        this.view.innerHTML = `
<h1>Welcome page :_)</h1>
<div>
    <p>Click on the button to get some tasks</p>
    <button onclick="window.location.href += '?${defaultAction}'">Yop</button>
</div>
`;
    }

    getName(): string {
        return DefaultView.name
    }
}
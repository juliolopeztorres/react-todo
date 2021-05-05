import View from "./View";
import {ACTION_TYPE} from "../../index";

export default class CreateTaskView implements View {
    private view: HTMLElement;

    constructor(view: HTMLElement) {
        this.view = view;
    }

    render(): void {
        const createAction: ACTION_TYPE = 'createTask';

        this.view.innerHTML = `
        <input type="text" name="id" placeholder="Enter an id..."/>
        <input type="text" name="name" placeholder="Enter a name..."/>
        <button type="button" onclick="
            window.location.search = '?' + '${createAction}' + '&name=' + document.getElementsByName('name')[0].value + 
            '&id=' + document.getElementsByName('id')[0].value
        ">Create</button>
        `;
    }
}

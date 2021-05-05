import GetTasksUseCaseViewInterface from "../../Domain/GetTasksUseCase/GetTasksUseCaseViewInterface";
import Task from "../../Domain/Model/Task";
import TaskCollectionMapper from "../Mapper/TaskCollectionMapper";
import {ACTION_TYPE} from "../../index";

export default class HomeView implements GetTasksUseCaseViewInterface {
    private view: HTMLElement;

    constructor(view: HTMLElement) {
        this.view = view;
    }

    onTasksLoaded(tasks: Array<Task>): void {
        const createAction: ACTION_TYPE = 'onCreateTaskClicked'
        const backAction: ACTION_TYPE = '';

        this.view.innerHTML = `
        ${TaskCollectionMapper.mapForDivList(tasks)}
        <button onclick="window.location.search = '${backAction}'">Back</button>
        <button onclick="window.location.search = '${createAction}'">Create</button>
        `;
    }

    onTasksLoadedError(message: string): void {
        this.view.innerHTML = `<h3>Error: ${message}</h3>`;
    }
}

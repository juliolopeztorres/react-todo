import CreateTaskView from "../View/CreateTaskView";
import ServiceContainer from "./ServiceContainer";
import View from "../View/View";
import TasksView from "../View/TasksView";
import Task from "../../Domain/Model/Task";
import DefaultView from "../View/DefaultView";

export type ACTION_TYPE = 'onYopButtonClicked' | 'onCreateTaskClicked' | 'createTask' | '';

export default class ViewContainer {
    private htmlContainer: HTMLElement;
    private serviceContainer: ServiceContainer;
    private views: Array<View>;

    constructor(htmlContainer: HTMLElement) {
        this.htmlContainer = htmlContainer;
        this.drawLoading();

        this.serviceContainer = new ServiceContainer();

        this.views = [
            new TasksView(htmlContainer, this.serviceContainer),
            new CreateTaskView(htmlContainer),
            // new DefaultView(htmlContainer),
        ];
    }

    private drawLoading(): void
    {
        this.draw('Loading...');
    }

    private draw(content: string): void
    {
        this.htmlContainer.innerHTML = content;
    }

    handleAction(search: string): void {
        let action: ACTION_TYPE = this.getActionType(search);
        const request = new URLSearchParams(search);

        if (action.length === 0) {
            this.getView(DefaultView.name).render();

            return;
        }

        // TODO: Think of better handling
        switch (action) {
            case 'onYopButtonClicked':
                this.getView(TasksView.name).render();
                return;
            case 'onCreateTaskClicked':
                this.getView(CreateTaskView.name).render();
                return;
            case 'createTask':
                (this.getView(TasksView.name) as TasksView).renderWithTask(
                    new Task(request.get('id')!, request.get('name')!)
                );
                return;
            default:
                throw new Error('Default Reach!')
        }
    }

    private getActionType(search: string): ACTION_TYPE {
        return (
            search.indexOf('?') === -1 ?
                '' :
                search.split('?')[1].split('&')[0]
        ) as ACTION_TYPE
    }

    private getView(name: string): View {
        const view = this.views.filter((view: View) => view.getName() === name)

        if (view.length !== 1) {
            throw new Error(`Unexpected numbers of views found for name ${name}: ${view.length}`)
        }

        return view[0];
    }
}

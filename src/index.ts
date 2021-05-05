import Container from "./Framework/Container";
import GetTasksUseCase from "./Domain/GetTasksUseCase/GetTasksUseCase";
import CreateTaskView from "./Framework/View/CreateTaskView";
import TaskRepository from "./Data/Repository/TaskRepository";

export type ACTION_TYPE = 'onYopButtonClicked' | 'onCreateTaskClicked' | 'createTask' | '';

let content = 'Loading...';

const htmlContainer = getHtmlContainer();

htmlContainer.innerHTML = content;

const container: Container = new Container(htmlContainer);

let action: ACTION_TYPE = (window.location.search.indexOf('?') === -1 ? '' : window.location.search.split('?')[1].split('&')[0]) as ACTION_TYPE;
const request = new URLSearchParams(window.location.search);

handleAction(action, request);

function getHtmlContainer(): HTMLElement {
    const container = document.getElementById('app');

    if (container === null) {
        throw new Error('No HTML container where to draw!');
    }

    return container;
}

function handleAction(action: ACTION_TYPE = '', request: URLSearchParams): void {
    if (action.length === 0) {
        const defaultAction = 'onYopButtonClicked';
            htmlContainer.innerHTML = `
        <h1>Welcome page :_)</h1>
        <div>
            <p>Click on the button to get some tasks</p>
            <button onclick="window.location.href += '?${defaultAction}'">Yop</button>
        </div>
        `;
        return;
    }

    switch (action) {
        case 'onYopButtonClicked':
            (container.get(GetTasksUseCase.name) as GetTasksUseCase).get();
            break;
        case 'onCreateTaskClicked':
            (container.get(CreateTaskView.name) as CreateTaskView).render();
            break;
        case 'createTask':
            (container.get(TaskRepository.name) as TaskRepository).create(request.get('id')!, request.get('name')!);
            (container.get(GetTasksUseCase.name) as GetTasksUseCase).get();
            break;
        default:
            console.log('default!');
            break;
    }
}

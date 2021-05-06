import ViewContainer from "./Framework/DependencyInjection/ViewContainer";

(new ViewContainer(getHtmlContainer())).handleAction(window.location.search);

function getHtmlContainer(): HTMLElement {
    const container = document.getElementById('app');

    if (container === null) {
        throw new Error('No HTML container where to draw!');
    }

    return container;
}

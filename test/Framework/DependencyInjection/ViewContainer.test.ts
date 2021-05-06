import ViewContainer from "../../../src/Framework/DependencyInjection/ViewContainer";

test('Can show default page', () => {
    const htmlContainer = document.createElementNS('tests', 'div') as HTMLElement;
    new ViewContainer(htmlContainer).handleAction('');

    expect(htmlContainer.innerHTML).toEqual(`
<h1>Welcome page :_)</h1>
<div>
    <p>Click on the button to get some tasks</p>
    <button onclick="window.location.href += '?onYopButtonClicked'">Yop</button>
</div>
`   );
});

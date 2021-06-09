export default function expectTagsInContainer(container: HTMLElement, tags: string[], expected: string[]) {
  for (let position in tags) {
    expect(container.querySelector(tags[position])!.innerHTML).toEqual(expected[position])
  }
}

export function expectTextAndLinkDetailsInButtons(
  buttons: NodeListOf<any>,
  expectedButtonTextAndAnchorHRef: { buttonText: string, anchorHref: string }[]) {
  for (let i = 0; i < buttons.length; i++) {
    expect(buttons.item(i).innerHTML).toEqual(expectedButtonTextAndAnchorHRef[i].buttonText)
    expect(buttons.item(i).parentElement!.getAttribute('href'))
      .toEqual(expectedButtonTextAndAnchorHRef[i].anchorHref)
  }
}

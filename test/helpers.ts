export default function expectTagsInContainer(container: HTMLElement, tags: string[], expected: string[]) {
  for (let position in tags) {
    expect(container.querySelector(tags[position])!.innerHTML).toEqual(expected[position])
  }
}

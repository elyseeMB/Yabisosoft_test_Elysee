export function strToDom(str: string) {
  return document.createRange().createContextualFragment(str)
    .firstChild as HTMLElement;
}

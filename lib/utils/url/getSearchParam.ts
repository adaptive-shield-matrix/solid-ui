export function getSearchParam(param: string, searchParams = new URLSearchParams(document.location.search)) {
  return searchParams.get(param)
}

export function getWindowLocationHash() {
  return new URLSearchParams(window.location.hash.slice(1))
}

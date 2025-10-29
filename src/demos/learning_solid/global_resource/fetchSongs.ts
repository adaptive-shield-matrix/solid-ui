import { type GlobalState } from "./GlobalState"

export const fetchSongs = (): Promise<GlobalState["songs"]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { name: "Never Gonna Give You Up", rating: 8 },
          { name: "Windows Errors Remix [10 Hours]", rating: 10 },
          { name: "Something else", rating: 1 },
        ]),
      1000,
    )
  })
}

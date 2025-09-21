import { For } from "solid-js"
import { createStore } from "solid-js/store"
import { globalContext } from "./globalContext.ts"
import type { GlobalState } from "./GlobalState.ts"
import { SongsResource } from "./SongsResource.tsx"

/**
 * https://andi.dev/blog/solid-resource-storage/
 * https://github.com/andi23rosca/solid-storage-example
 *
 * Context docs - https://docs.solidjs.com/concepts/context
 *
 */
export const DemoSolidGlobalResourceApp = () => {
  const [state, setState] = createStore<GlobalState>({
    songs: [],
  })
  return (
    <globalContext.Provider value={[state, setState]}>
      <div>
        <SongsResource />

        <div style={{ "margin-top": "2rem", "margin-bottom": "1rem" }}>Songs rendered from state</div>
        <For each={state.songs}>
          {(song) => (
            <div>
              {song.name} - {song.rating}
            </div>
          )}
        </For>
      </div>
    </globalContext.Provider>
  )
}

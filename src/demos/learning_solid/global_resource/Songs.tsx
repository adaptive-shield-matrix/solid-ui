import { type Component, For } from "solid-js"
import type { GlobalState } from "./GlobalState"

export const Songs: Component<{ songs?: GlobalState["songs"] }> = (p) => (
  <For each={p.songs}>
    {(song) => (
      <div>
        {song.name} - {song.rating}
      </div>
    )}
  </For>
)

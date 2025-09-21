import { createContext, useContext } from "solid-js"
import type { SetStoreFunction, Store } from "solid-js/store"
import { type GlobalState } from "./GlobalState.ts"

export const globalContext = createContext<[get: Store<GlobalState>, set: SetStoreFunction<GlobalState>]>([
  { songs: [] },
  () => {},
])

export const useGlobal = () => useContext(globalContext)

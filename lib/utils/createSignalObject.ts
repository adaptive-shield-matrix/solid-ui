import { type Accessor, createSignal, type Setter } from "solid-js"

//
// https://www.reddit.com/r/solidjs/comments/17r9dgm/signal_gettersetter_naming_convention/
//

export type SignalObject<T> = { get: Accessor<T>; set: Setter<T> }

export function createSignalObject<T>(v: T): SignalObject<T> {
  const [get, set] = createSignal(v)
  return { get, set }
}

import { createSignal } from "solid-js"
import type { SignalObject } from "~ui/utils/createSignalObject"

export type IsOpenSignalObject = {
  get(): boolean
  set(v: boolean): void
  open(): void
  close(): void
}

export function createNativeDialogOpenStateSignal(
  dialogRef: SignalObject<HTMLDialogElement | null>,
  defaultStateOpen = false,
): IsOpenSignalObject {
  const [signalGet, signalSet] = createSignal(defaultStateOpen)
  function set(v: boolean) {
    // const isShown = signalGet()
    // if (isShown === v) return

    signalSet(v)

    const ref = dialogRef.get()
    if (!ref) return

    if (v) {
      ref.showModal()
    } else {
      ref.close()
    }
  }
  return {
    get: signalGet,
    set,
    open: function open() {
      set(true)
    },
    close: function close() {
      set(false)
    },
  }
}

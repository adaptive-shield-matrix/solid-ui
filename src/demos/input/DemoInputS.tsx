import type { JSX } from "solid-js"
import { InputS } from "~ui/input/input/InputS"
import { createSignalObject } from "~ui/utils/createSignalObject"

export function DemoInputS() {
  const valueSignal = createSignalObject("")
  const derivedSignal = createSignalObject("")

  const handleInput: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    console.log("Custom onInput called:", e)
    const derivedValue = e.currentTarget.value.length
    derivedSignal.set("Length: " + derivedValue)
  }

  return (
    <div class="p-4 space-y-4">
      <h2 class="text-lg font-semibold">InputS with onInput prop</h2>
      <p>Type in the input below and check console - the signal should be updated even when onInput is provided</p>

      <InputS valueSignal={valueSignal} onInput={handleInput} placeholder="Type something..." />

      <p>Current signal value: {valueSignal.get()}</p>
      <p>Derived signal value: {derivedSignal.get()}</p>
    </div>
  )
}

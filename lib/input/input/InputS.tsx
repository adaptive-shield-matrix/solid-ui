import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { Input } from "~ui/input/input/Input"
import type { SignalObject } from "~ui/utils/createSignalObject"

export interface InputSProps extends ComponentProps<"input"> {
  valueSignal: SignalObject<string>
}

export function InputS(p: InputSProps) {
  const [, rest] = splitProps(p, ["valueSignal", "onInput"])
  const onInputLocal: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    p.valueSignal.set(e.currentTarget.value)
    if (p.onInput && typeof p.onInput === "function") {
      p.onInput(e)
    }
  }
  return <Input value={p.valueSignal.get()} onInput={onInputLocal} {...rest} />
}

import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { Input } from "~ui/input/input/Input"
import type { SignalObject } from "~ui/utils/createSignalObject"

export interface InputSProps extends ComponentProps<"input"> {
  valueSignal: SignalObject<string>
}

export function InputS(p: InputSProps) {
  const [s, rest] = splitProps(p, ["valueSignal", "value", "onInput"])
  const onInputLocal: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    const value = e.currentTarget.value
    s.valueSignal.set(value)
    if (s.onInput && typeof s.onInput === "function") {
      s.onInput(e)
    }
  }
  return <Input value={s.valueSignal.get()} onInput={onInputLocal} {...rest} />
}

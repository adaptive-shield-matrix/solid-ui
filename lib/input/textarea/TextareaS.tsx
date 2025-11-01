import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { Textarea } from "~ui/input/textarea/Textarea"
import type { SignalObject } from "~ui/utils/createSignalObject"

export interface TextAreaSProps extends ComponentProps<"textarea"> {
  valueSignal: SignalObject<string>
}

export function TextareaS(p: TextAreaSProps) {
  const [s, rest] = splitProps(p, ["valueSignal", "value", "onInput"])
  const onInputLocal: JSX.InputEventHandlerUnion<HTMLTextAreaElement, InputEvent> = (e) => {
    const value = e.currentTarget.value
    s.valueSignal.set(value)
    if (s.onInput && typeof s.onInput === "function") {
      s.onInput(e)
    }
  }
  return <Textarea value={s.valueSignal.get()} onInput={onInputLocal} {...rest} />
}

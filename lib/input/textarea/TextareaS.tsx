import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { Textarea } from "~ui/input/textarea/Textarea"
import type { SignalObject } from "~ui/utils/createSignalObject"

export interface TextAreaSProps extends ComponentProps<"textarea"> {
  valueSignal: SignalObject<string>
}

export function TextareaS(p: TextAreaSProps) {
  const [, rest] = splitProps(p, ["valueSignal", "value", "onInput"])
  const onInputLocal: JSX.InputEventHandlerUnion<HTMLTextAreaElement, InputEvent> = (e) => {
    const value = e.currentTarget.value
    p.valueSignal.set(value)
    if (p.onInput && typeof p.onInput === "function") {
      p.onInput(e)
    }
  }
  return <Textarea value={p.valueSignal.get()} onInput={onInputLocal} {...rest} />
}

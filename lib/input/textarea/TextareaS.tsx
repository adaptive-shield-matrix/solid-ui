import { type ComponentProps, splitProps } from "solid-js"
import { Textarea } from "~ui/input/textarea/Textarea"
import type { SignalObject } from "~ui/utils/createSignalObject"

export interface TextAreaSProps extends ComponentProps<"textarea"> {
  valueSignal: SignalObject<string>
}

export function TextareaS(p: TextAreaSProps) {
  const [, rest] = splitProps(p, ["valueSignal"])
  // return <Checkbox value={p.valueSignal.get()} onChange={p.valueSignal.set} {...rest} />
  return <Textarea value={p.valueSignal.get()} onInput={(e) => p.valueSignal.set(e.currentTarget.value)} {...rest} />
}

import { type ComponentProps, splitProps } from "solid-js"
import { Textarea } from "~/input/textarea/Textarea"
import type { SignalObject } from "~/utils/ui/createSignalObject"

export type TextAreaSProps = {
  valueSignal: SignalObject<string>
}

export function TextareaS(p: TextAreaSProps & ComponentProps<"textarea">) {
  const [, rest] = splitProps(p, ["valueSignal"])
  // return <Checkbox value={p.valueSignal.get()} onChange={p.valueSignal.set} {...rest} />
  return <Textarea value={p.valueSignal.get()} onInput={(e) => p.valueSignal.set(e.currentTarget.value)} {...rest} />
}

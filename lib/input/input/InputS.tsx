import { type ComponentProps, splitProps } from "solid-js"
import { Input } from "~/input/input/Input.tsx"
import type { SignalObject } from "~/utils/createSignalObject.ts"

export interface InputSProps extends ComponentProps<"input"> {
  valueSignal: SignalObject<string>
}

export function InputS(p: InputSProps) {
  const [, rest] = splitProps(p, ["valueSignal"])
  return <Input value={p.valueSignal.get()} onInput={(e) => p.valueSignal.set(e.currentTarget.value)} {...rest} />
}

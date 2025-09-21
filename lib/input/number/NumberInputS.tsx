import { mdiMinus, mdiMinusBox, mdiPlus, mdiPlusBox } from "@mdi/js"
import { type JSX } from "solid-js"
import { ct1 } from "~/i18n/ct0.ts"
import { Input } from "~/input/input/Input.tsx"
import { t4atomizedNumberInput } from "~/input/number/t4atomizedNumberInput.ts"
import { buttonVariant, type ButtonVariant } from "~/interactive/button/buttonCva.ts"
import { ButtonIconOnly } from "~/interactive/button/ButtonIconOnly.tsx"
import { safeParseInt } from "~/utils/int/safeParseInt.ts"
import { classMerge } from "~/utils/ui/classMerge"
import type { SignalObject } from "~/utils/ui/createSignalObject"

export type NumberInputSProps = {
  valueSignal: SignalObject<number>
  min?: number
  max?: number
  incrDecrAmount?: number
  incrDecrAmountMajor?: number
  disabled?: boolean
  class?: string
  inputClass?: string
  variant?: ButtonVariant
  buttonClass?: string
  onChanged?: (v: number) => void
  id?: string
}

export function NumberInputS(p: NumberInputSProps) {
  const hasMajor = p.incrDecrAmountMajor !== undefined
  const onChange: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> | undefined = (e) => {
    const n = p.valueSignal.get()
    let newN = safeParseInt(e.target.value, n)
    if (p.min !== undefined) newN = Math.max(p.min, newN)
    if (p.max !== undefined) newN = Math.min(p.max, newN)
    p.valueSignal.set(newN)
    if (p.onChanged) p.onChanged(newN)
  }
  const decrementMajor: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined = (e) => {
    const n = p.valueSignal.get()
    let newN = n - (p.incrDecrAmountMajor ?? 10) * (e.ctrlKey ? 100 : 1)
    if (p.min !== undefined) newN = Math.max(p.min, newN)
    p.valueSignal.set(newN)
    if (p.onChanged) p.onChanged(newN)
  }
  const decrement: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined = (e) => {
    const n = p.valueSignal.get()
    let newN = n - (p.incrDecrAmount ?? 1) * (e.ctrlKey ? 100 : 1)
    if (p.min !== undefined) newN = Math.max(p.min, newN)
    p.valueSignal.set(newN)
    if (p.onChanged) p.onChanged(newN)
  }
  const increment: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined = (e) => {
    const n = p.valueSignal.get()
    let newN = n + (p.incrDecrAmount ?? 1) * (e.ctrlKey ? 100 : 1)
    if (p.max !== undefined) newN = Math.min(p.max, newN)
    p.valueSignal.set(newN)
    if (p.onChanged) p.onChanged(newN)
  }
  const incrementMajor: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined = (e) => {
    const n = p.valueSignal.get()
    let newN = n + (p.incrDecrAmountMajor ?? 10) * (e.ctrlKey ? 100 : 1)
    if (p.max !== undefined) newN = Math.min(p.max, newN)
    p.valueSignal.set(newN)
    if (p.onChanged) p.onChanged(newN)
  }
  const defaultVariant = buttonVariant.ghost
  return (
    <div class={classMerge("flex flex-row flex-nowrap items-center", p.class)}>
      {p.incrDecrAmountMajor && (
        <ButtonIconOnly
          icon={mdiMinusBox}
          title={ct1(t4atomizedNumberInput.Decrease_by_X, p.incrDecrAmountMajor)}
          onClick={decrementMajor}
          variant={p.variant ?? defaultVariant}
          class={classMerge("rounded-r-none", p.buttonClass)}
          disabled={p.disabled || (p.min !== undefined && p.valueSignal.get() <= p.min)}
          type={"button"}
        />
      )}
      <ButtonIconOnly
        icon={mdiMinus}
        title={ct1(t4atomizedNumberInput.Decrease_by_X, p.incrDecrAmount ?? 1)}
        onClick={decrement}
        variant={p.variant ?? defaultVariant}
        class={classMerge(hasMajor ? "rounded-none" : "rounded-r-none", p.buttonClass)}
        disabled={p.disabled || (p.min !== undefined && p.valueSignal.get() <= p.min)}
        type={"button"}
      />
      <Input
        type="number"
        value={p.valueSignal.get()}
        onInput={onChange}
        id={p.id}
        class={classMerge("w-14 rounded-none text-center outline-0 focus:z-10", p.inputClass)}
        disabled={p.disabled}
        min={p.min}
        max={p.max}
      />
      <ButtonIconOnly
        icon={mdiPlus}
        title={ct1(t4atomizedNumberInput.Increase_by_X, p.incrDecrAmount ?? 1)}
        onClick={increment}
        variant={p.variant ?? defaultVariant}
        class={classMerge(hasMajor ? "rounded-none" : "rounded-l-none", p.buttonClass)}
        disabled={p.disabled || (p.max !== undefined && p.valueSignal.get() >= p.max)}
        type={"button"}
      />
      {p.incrDecrAmountMajor && (
        <ButtonIconOnly
          icon={mdiPlusBox}
          title={ct1(t4atomizedNumberInput.Increase_by_X, p.incrDecrAmountMajor)}
          onClick={incrementMajor}
          variant={p.variant ?? defaultVariant}
          class={classMerge("rounded-l-none", p.buttonClass)}
          disabled={p.disabled || (p.max !== undefined && p.valueSignal.get() >= p.max)}
          type={"button"}
        />
      )}
    </div>
  )
}

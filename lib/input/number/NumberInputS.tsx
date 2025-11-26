import { mdiMinus, mdiMinusBox, mdiPlus, mdiPlusBox } from "@mdi/js"
import { type JSX } from "solid-js"
import type { NumberInputText } from "~ui/input/number/NumberInputTexts"
import { numberInputTextDefault } from "~ui/input/number/NumberInputTexts"
import { Input } from "~ui/input/input/Input"
import { buttonVariant, type ButtonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { classMerge } from "~ui/utils/classMerge"
import type { SignalObject } from "~ui/utils/createSignalObject"
import { safeParseInt } from "~utils/int/safeParseInt"

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
  translate?: (en: string, x1?: string | number) => string
  texts?: NumberInputText
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

  const texts = p.texts ?? numberInputTextDefault

  return (
    <div class={classMerge("flex flex-row flex-nowrap items-center", p.class)}>
      {p.incrDecrAmountMajor && (
        <ButtonIconOnly
          icon={mdiMinusBox}
          title={texts.decreaseByX(p.incrDecrAmountMajor)}
          onClick={decrementMajor}
          variant={p.variant ?? defaultVariant}
          class={classMerge("rounded-r-none", p.buttonClass)}
          disabled={p.disabled || (p.min !== undefined && p.valueSignal.get() <= p.min)}
          type={"button"}
        />
      )}
      <ButtonIconOnly
        icon={mdiMinus}
        title={texts.decreaseByX(p.incrDecrAmount ?? 1)}
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
        title={texts.increaseByX(p.incrDecrAmount ?? 1)}
        onClick={increment}
        variant={p.variant ?? defaultVariant}
        class={classMerge(hasMajor ? "rounded-none" : "rounded-l-none", p.buttonClass)}
        disabled={p.disabled || (p.max !== undefined && p.valueSignal.get() >= p.max)}
        type={"button"}
      />
      {p.incrDecrAmountMajor && (
        <ButtonIconOnly
          icon={mdiPlusBox}
          title={texts.increaseByX(p.incrDecrAmountMajor)}
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

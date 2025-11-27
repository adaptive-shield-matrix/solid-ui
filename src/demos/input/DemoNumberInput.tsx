import type { JSX } from "solid-js"
import { NumberInputS } from "~ui/input/number/NumberInputS"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"

export function DemoNumberInput() {
  const valueSignal = createSignalObject(0)
  const derivedSignal = createSignalObject("")
  const budgetSignal = createSignalObject(50000)

  const handleInput: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    console.log("Custom onInput called:", e)
    const currentValue = Number(e.currentTarget.value)
    const derivedValue = currentValue * 2
    derivedSignal.set("Double: " + derivedValue)
  }

  const handleBudgetChange = (value: number) => {
    budgetSignal.set(value)
    console.log("Budget changed to:", value)
  }

  return (
    <PageWrapper>
      <div class="space-y-8">
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">NumberInputS with onInput prop</h2>
          <p>
            Type in the number input below and check console - the signal should be updated even when onInput is
            provided
          </p>

          <NumberInputS valueSignal={valueSignal} onInput={handleInput} />

          <p>Current signal value: {valueSignal.get()}</p>
          <p>Derived signal value: {derivedSignal.get()}</p>
        </div>

        <div class="space-y-4">
          <h2 class="text-lg font-semibold">NumberInputS with advanced configuration</h2>
          <p>Example with min, step, increment/decrement amounts, and custom styling</p>

          <NumberInputS
            valueSignal={budgetSignal}
            onValueChange={handleBudgetChange}
            min={0}
            step={1000}
            incrDecrAmount={1000}
            incrDecrAmountMajor={1_000_000}
            inputClass="w-[18ch]"
          />

          <p>Budget value: ${budgetSignal.get().toLocaleString()}</p>
        </div>
      </div>
    </PageWrapper>
  )
}

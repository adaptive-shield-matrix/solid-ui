import { NumberInputS } from "~/input/number/NumberInputS.tsx"
import { PageWrapper } from "~/static/container/PageWrapper.tsx"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export function DemoNumberInput() {
  const valueSignal = createSignalObject(0)
  return (
    <PageWrapper>
      <NumberInputS valueSignal={valueSignal} />
    </PageWrapper>
  )
}

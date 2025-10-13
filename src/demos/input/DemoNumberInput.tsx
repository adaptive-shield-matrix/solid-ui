import { NumberInputS } from "~ui/input/number/NumberInputS.tsx"
import { PageWrapper } from "~ui/static/container/PageWrapper.tsx"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

export function DemoNumberInput() {
  const valueSignal = createSignalObject(0)
  return (
    <PageWrapper>
      <NumberInputS valueSignal={valueSignal} />
    </PageWrapper>
  )
}

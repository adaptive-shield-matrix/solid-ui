import { NumberInputS } from "~ui/input/number/NumberInputS.tsx"
import { PageWrapper2 } from "~ui/static/page/PageWrapper2"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

export function DemoNumberInput() {
  const valueSignal = createSignalObject(0)
  return (
    <PageWrapper2>
      <NumberInputS valueSignal={valueSignal} />
    </PageWrapper2>
  )
}

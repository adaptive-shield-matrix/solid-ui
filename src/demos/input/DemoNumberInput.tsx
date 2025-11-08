import { NumberInputS } from "~ui/input/number/NumberInputS"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"

export function DemoNumberInput() {
  const valueSignal = createSignalObject(0)
  return (
    <PageWrapper>
      <NumberInputS valueSignal={valueSignal} />
    </PageWrapper>
  )
}

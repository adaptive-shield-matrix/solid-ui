import { RadioSwitch } from "~ui/input/radio/RadioSwitch"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import type { SelectionItem } from "~ui/utils/SelectionItem"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100 = arrCreate<SelectionItem>(100, (i) => ({ value: "" + i, label: "Option " + i }))
const singleValueSignal = createSignalObject<SelectionItem | null>(null)

export function DemoRadioSwitch() {
  return (
    <PageWrapper>
      <RadioSwitch valueSignal={singleValueSignal} getOptions={() => options100} />
    </PageWrapper>
  )
}

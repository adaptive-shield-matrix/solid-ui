import { RadioSwitch } from "~ui/input/radio/RadioSwitch.tsx"
import { PageWrapper2 } from "~ui/static/page/PageWrapper2"
import { arrCreate } from "~ui/utils/arr/arrCreate.ts"
import type { SelectionItem } from "~ui/utils/ui/SelectionItem"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

const options100 = arrCreate<SelectionItem>(100, (i) => ({ value: "" + i, label: "Option " + i }))
const singleValueSignal = createSignalObject<SelectionItem | null>(null)

export function DemoRadioSwitch() {
  return (
    <PageWrapper2>
      <RadioSwitch valueSignal={singleValueSignal} getOptions={() => options100} />
    </PageWrapper2>
  )
}

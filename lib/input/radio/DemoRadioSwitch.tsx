import { RadioSwitch } from "~/input/radio/RadioSwitch.tsx"
import { PageWrapper2 } from "~/static/container/PageWrapper2.tsx"
import { arrCreate } from "~/utils/arr/arrCreate.ts"
import { createSignalObject } from "~/utils/createSignalObject.ts"
import type { SelectionItem } from "~/utils/SelectionItem.tsx"

const options100 = arrCreate<SelectionItem>(100, (i) => ({ value: "" + i, label: "Option " + i }))
const singleValueSignal = createSignalObject<SelectionItem | null>(null)

export function DemoRadioSwitch() {
  return (
    <PageWrapper2>
      <RadioSwitch valueSignal={singleValueSignal} getOptions={() => options100} />
    </PageWrapper2>
  )
}

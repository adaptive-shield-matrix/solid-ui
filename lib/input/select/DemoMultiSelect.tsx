import { Multiselect } from "~/input/select/Multiselect.tsx"
import { PageWrapper2 } from "~/static/container/PageWrapper2.tsx"
import { arrCreate } from "~/utils/arr/arrCreate.ts"
import { createSignalObject } from "~/utils/createSignalObject.ts"
import type { SelectionItem } from "~/utils/SelectionItem.tsx"

const options5 = arrCreate<SelectionItem>(5, (i) => ({ value: "" + i, label: "Option " + i }))
const options100 = arrCreate<SelectionItem>(100, (i) => ({ value: "" + i, label: "Option " + i }))
const multiValueSignal = createSignalObject<SelectionItem[]>([])

export function DemoMultiSelect() {
  return (
    <PageWrapper2>
      <Multiselect valueSignal={multiValueSignal} getOptions={() => options5} buttonProps={{}} />
      <Multiselect valueSignal={multiValueSignal} getOptions={() => options100} buttonProps={{}} />
    </PageWrapper2>
  )
}

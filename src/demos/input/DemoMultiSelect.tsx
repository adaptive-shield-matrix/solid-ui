import { Multiselect } from "~ui/input/select/Multiselect"
import { PageWrapper2 } from "~ui/static/page/PageWrapper2"
import type { SelectionItem } from "~ui/utils/SelectionItem"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

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

import { Multiselect } from "~ui/input/select/Multiselect"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import type { SelectionItem } from "~ui/utils/SelectionItem"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100 = arrCreate<SelectionItem>(100, (i) => ({ value: "" + i, label: "Option " + i }))
const multiValueSignal = createSignalObject<SelectionItem[]>([])

export function DemoMultiSelect() {
  return (
    <PageWrapper>
      <Multiselect valueSignal={multiValueSignal} getOptions={() => options100} buttonProps={{}} />
    </PageWrapper>
  )
}

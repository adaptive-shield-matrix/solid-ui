import { demoGetTextValue } from "@/demos/input/demoGetTextValue"
import { SelectMultiple } from "~ui/input/select/SelectMultiple"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100Strings = arrCreate<string>(100, (i) => "" + i)
const multiValueSignal = createSignalObject<string[]>([])

export function DemoSelectMultiple() {
  return (
    <PageWrapper>
      <SelectMultiple
        id="DemoMultiSelect"
        valueSignal={multiValueSignal}
        getOptions={() => options100Strings}
        buttonProps={{}}
        valueText={demoGetTextValue}
      />
    </PageWrapper>
  )
}

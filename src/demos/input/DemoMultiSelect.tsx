import { MultiSelect } from "~ui/input/select/MultiSelect"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100Strings = arrCreate<string>(100, (i) => "" + i)
const multiValueSignal = createSignalObject<string[]>([])

export function DemoMultiSelect() {
  return (
    <PageWrapper>
      <MultiSelect
        id="DemoMultiSelect"
        valueSignal={multiValueSignal}
        getOptions={() => options100Strings}
        buttonProps={{}}
        valueText={(value) => "Option " + value}
      />
    </PageWrapper>
  )
}

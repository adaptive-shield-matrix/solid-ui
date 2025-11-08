import { Multiselect } from "~ui/input/select/Multiselect"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100Strings = arrCreate<string>(100, (i) => "" + i)
const multiValueSignal = createSignalObject<string[]>([])

export function DemoMultiSelect() {
  return (
    <PageWrapper>
      <Multiselect
        valueSignal={multiValueSignal}
        getOptions={() => options100Strings}
        buttonProps={{}}
        valueDisplay={(value) => "Option " + value}
      />
    </PageWrapper>
  )
}

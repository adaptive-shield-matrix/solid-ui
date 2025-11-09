import { demoGetTextValue } from "@/demos/input/demoGetTextValue"
import { createMemo, type Accessor } from "solid-js"
import { SelectSingleNative } from "~ui/input/select/SelectSingleNative"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100 = arrCreate<string>(100, (i) => "" + i)
const singleValueSignal = createSignalObject<string>("")

export function DemoSelectSingleNative() {
  const getOptions: Accessor<string[]> = createMemo(() => options100)
  const valueText = (value: string) => `Option ${value}`

  return (
    <PageWrapper>
      <SelectSingleNative valueSignal={singleValueSignal} getOptions={getOptions} valueText={demoGetTextValue} />
    </PageWrapper>
  )
}

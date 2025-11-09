import { demoGetTextValue } from "@/demos/input/demoGetTextValue"
import { CheckSingle } from "~ui/input/check/CheckSingle"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options10Strings = arrCreate<string>(10, (i) => `${i}`)
const singleValueSignal = createSignalObject<string>("")

export function DemoCheckSingle() {
  return (
    <PageWrapper>
      <CheckSingle
        id="DemoSingleCheck"
        valueSignal={singleValueSignal}
        getOptions={() => options10Strings}
        valueText={demoGetTextValue}
      />
    </PageWrapper>
  )
}

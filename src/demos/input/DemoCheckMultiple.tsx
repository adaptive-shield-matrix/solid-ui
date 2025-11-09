import { demoGetTextValue } from "@/demos/input/demoGetTextValue"
import { CheckMultiple } from "~ui/input/check/CheckMultiple"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options10Strings = arrCreate<string>(10, (i) => `${i}`)
const multiValueSignal = createSignalObject<string[]>([])

export function DemoCheckMultiple() {
  return (
    <PageWrapper>
      <CheckMultiple
        id="DemoMultiCheck2"
        valueSignal={multiValueSignal}
        getOptions={() => options10Strings}
        valueText={demoGetTextValue}
      />
    </PageWrapper>
  )
}

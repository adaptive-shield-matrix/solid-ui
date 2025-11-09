import { demoGetTextValue } from "@/demos/input/demoGetTextValue"
import { SwitchSingle } from "~ui/input/switch/SwitchSingle"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100 = arrCreate<string>(100, (i) => "" + i)
const singleValueSignal = createSignalObject<string>("")

export function DemoSwitchSingle() {
  return (
    <PageWrapper>
      <SwitchSingle valueSignal={singleValueSignal} getOptions={() => options100} valueText={demoGetTextValue} />
    </PageWrapper>
  )
}

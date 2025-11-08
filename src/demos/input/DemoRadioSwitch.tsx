import { RadioSwitch } from "~ui/input/radio/RadioSwitch"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100 = arrCreate<string>(100, (i) => "" + i)
const singleValueSignal = createSignalObject<string>("")

export function DemoRadioSwitch() {
  return (
    <PageWrapper>
      <RadioSwitch
        valueSignal={singleValueSignal}
        getOptions={() => options100}
        valueText={(value) => `Option ${value}`}
      />
    </PageWrapper>
  )
}

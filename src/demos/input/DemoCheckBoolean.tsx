import { CheckBoolean } from "~ui/input/check/CheckBoolean"
import { CheckBooleanSingle } from "~ui/input/check/CheckBooleanSingle"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"

const booleanValueSignal = createSignalObject<boolean>(false)
const booleanBothValueSignal = createSignalObject<boolean>(false)

export function DemoCheckBoolean() {
  return (
    <PageWrapper>
      <div class="space-y-6">
        <CheckBooleanSingle
          id="DemoBooleanCheck"
          valueSignal={booleanValueSignal}
          valueText={(value) => (value ? "Enabled" : "Disabled")}
          class="max-w-sm"
        />

        <CheckBoolean
          id="DemoBooleanBothCheck"
          valueSignal={booleanBothValueSignal}
          valueText={(value) => (value ? "Enabled" : "Disabled")}
          class="max-w-sm"
        />
      </div>
    </PageWrapper>
  )
}

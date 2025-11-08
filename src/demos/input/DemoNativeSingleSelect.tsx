import { createMemo, type Accessor } from "solid-js"
import { NativeSingleSelect } from "~ui/input/select/NativeSingleSelect"
import { PageWrapper } from "~ui/static/page/PageWrapper"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { arrCreate } from "~utils/arr/arrCreate"

const options100 = arrCreate<string>(100, (i) => "" + i)
const singleValueSignal = createSignalObject<string>("")

export function DemoNativeSingleSelect() {
  const getOptions: Accessor<string[]> = createMemo(() => options100)
  const valueDisplay = (value: string) => `Option ${value}`

  return (
    <PageWrapper>
      <NativeSingleSelect valueSignal={singleValueSignal} getOptions={getOptions} valueDisplay={valueDisplay} />
    </PageWrapper>
  )
}

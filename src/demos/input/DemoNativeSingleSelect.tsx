import { createMemo, type Accessor } from "solid-js"
import { NativeSingleSelect } from "~ui/input/select/NativeSingleSelect"
import { PageWrapper2 } from "~ui/static/container/PageWrapper2.tsx"
import { arrCreate } from "~ui/utils/arr/arrCreate.ts"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

const options100 = arrCreate<string>(100, (i) => "" + i)
const singleValueSignal = createSignalObject<string>("")

export function DemoNativeSingleSelect() {
  const getOptions: Accessor<string[]> = createMemo(() => options100)
  const valueDisplay = (value: string) => `Option ${value}`

  return (
    <PageWrapper2>
      <NativeSingleSelect valueSignal={singleValueSignal} getOptions={getOptions} valueDisplay={valueDisplay} />
    </PageWrapper2>
  )
}

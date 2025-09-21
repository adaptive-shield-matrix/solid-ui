import { For } from "solid-js"
import { Button } from "~/interactive/button/Button.tsx"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { toastAdd } from "~/interactive/toast/toastAdd.ts"
import { type ToastVariant, toastVariant } from "~/interactive/toast/toastVariant.ts"
import { PageWrapper2 } from "~/static/container/PageWrapper2.tsx"
import { generateSequentialNamedIntId } from "~/utils/int/generateSequentialNamedIntId.ts"

export function DemoToaster() {
  return (
    <PageWrapper2>
      <For each={Object.values(toastVariant)}>
        {(v) => (
          <Button variant={buttonVariant.outline} onClick={() => generateToast(v)}>
            {v}
          </Button>
        )}
      </For>
    </PageWrapper2>
  )
}

const titles = ["Toast", "A very long toast title"]
const descriptions = ["Short description", "A very long toast description"]

function generateToast(v: ToastVariant) {
  const n = generateSequentialNamedIntId("toast")
  const icon = n % 2 === 0 ? undefined : ""
  const title = titles[n % titles.length]!
  const description = descriptions[n % descriptions.length]!
  toastAdd({ icon, title, description, variant: v })
}

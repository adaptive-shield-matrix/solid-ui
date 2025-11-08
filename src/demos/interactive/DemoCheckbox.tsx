import { createSignal } from "solid-js"
import { Checkbox } from "~ui/interactive/check/Checkbox"
import { toastAdd } from "~ui/interactive/toast/toastAdd"
import { toastVariant } from "~ui/interactive/toast/toastVariant"
import { PageWrapper } from "~ui/static/page/PageWrapper"

export function DemoCheckbox() {
  return (
    <PageWrapper class="">
      <h1 class="text-3xl font-bold mb-6">Checkbox Demo</h1>
      <div class="space-y-8">
        <BasicCheckboxDemo />
        <DisabledCheckboxDemo />
        <MultipleCheckboxesDemo />
      </div>
    </PageWrapper>
  )
}

function BasicCheckboxDemo() {
  const [checked, setChecked] = createSignal(false)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Checkbox</h2>
      <div class="flex items-center gap-4">
        <Checkbox
          checked={checked()}
          onChange={(newChecked) => {
            setChecked(newChecked)
            toastAdd({
              title: `Checkbox ${newChecked ? "checked" : "unchecked"}`,
              variant: toastVariant.info,
            })
          }}
        >
          Accept terms and conditions
        </Checkbox>
      </div>
      <div class="mt-2 text-sm text-muted-foreground">State: {checked() ? "Checked" : "Unchecked"}</div>
    </div>
  )
}

function DisabledCheckboxDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Disabled Checkbox</h2>
      <div class="space-y-4">
        <Checkbox checked={false} onChange={() => {}} disabled>
          Disabled unchecked
        </Checkbox>
        <Checkbox checked={true} onChange={() => {}} disabled>
          Disabled checked
        </Checkbox>
      </div>
    </div>
  )
}

function MultipleCheckboxesDemo() {
  type Options = { email: boolean; sms: boolean; push: boolean }

  const [options, setOptions] = createSignal<Options>({
    email: false,
    sms: true,
    push: false,
  })

  const updateOption = (key: keyof Options, checked: boolean) => {
    setOptions((prev) => ({ ...prev, [key]: checked }))
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Multiple Checkboxes</h2>
      <div class="space-y-2">
        <Checkbox checked={options().email} onChange={(checked) => updateOption("email", checked)}>
          Email notifications
        </Checkbox>
        <Checkbox checked={options().sms} onChange={(checked) => updateOption("sms", checked)}>
          SMS notifications
        </Checkbox>
        <Checkbox checked={options().push} onChange={(checked) => updateOption("push", checked)}>
          Push notifications
        </Checkbox>
      </div>
      <div class="mt-4 text-sm text-muted-foreground">
        Selected options:{" "}
        {Object.entries(options())
          .filter(([_, v]) => v)
          .map(([k]) => k)
          .join(", ") || "None"}
      </div>
    </div>
  )
}

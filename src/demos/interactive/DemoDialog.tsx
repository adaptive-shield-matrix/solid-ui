import { LongContent } from "@/demos/interactive/LongContent"
import { mdiCog } from "@mdi/js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { CorvuDialog } from "~ui/interactive/dialog/CorvuDialog"
import { CorvuDialogIcon } from "~ui/interactive/dialog/CorvuDialogIcon"
import { classesGridCols4xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/classArr"

export function DemoDialog() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Dialog Demo</h1>
      <div class={classArr(classesGridCols4xl, "gap-4")}>
        <SimpleDialogDemo />
        <NestedDialogDemo />
        <LongContentDialogDemo />
      </div>
    </div>
  )
}

function SimpleDialogDemo() {
  return (
    <div>
      <h2 class="text-xl font-semibold mb-3">Simple Icon Dialog</h2>
      <CorvuDialogIcon
        variant={buttonVariant.outline}
        icon={mdiCog}
        title="Settings"
        dialogTitle="Settings"
        description="Configure your application settings"
      >
        <div class="space-y-4">
          <div>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="rounded" />
              <span>Enable notifications</span>
            </label>
          </div>
          <div>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="rounded" />
              <span>Dark mode</span>
            </label>
          </div>
          <div>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="rounded" />
              <span>Auto-save</span>
            </label>
          </div>
        </div>
      </CorvuDialogIcon>
    </div>
  )
}

function NestedDialogDemo() {
  return (
    <div>
      <h2 class="text-xl font-semibold mb-3">Nested Dialog</h2>
      <CorvuDialog variant={buttonVariant.outline} buttonChildren="Show Nested Dialog" title="Parent Dialog">
        <div class="space-y-4">
          <p>This is the parent dialog. Click the button below to open a nested dialog.</p>
          <CorvuDialog variant={buttonVariant.primary} buttonChildren="Open Nested Dialog" title="Nested Dialog">
            <div>
              <p>This is a nested dialog inside the parent dialog!</p>
              <p class="mt-2">You can have multiple levels of nesting.</p>
            </div>
          </CorvuDialog>
        </div>
      </CorvuDialog>
    </div>
  )
}

function LongContentDialogDemo() {
  return (
    <div>
      <h2 class="text-xl font-semibold mb-3">Long Content Dialog</h2>
      <CorvuDialog
        variant={buttonVariant.outline}
        buttonChildren="Open Long Content Dialog"
        title="Terms and Conditions"
        description="Please read through our complete terms of service"
      >
        <LongContent />
      </CorvuDialog>
    </div>
  )
}

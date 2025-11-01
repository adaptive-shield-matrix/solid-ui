import { mdiAccount, mdiInformation, mdiPencil } from "@mdi/js"
import { createSignal } from "solid-js"
import { Button } from "~ui/interactive/button/Button"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { NativeDialog } from "~ui/interactive/dialog/NativeDialog"
import { classesGridCols4xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/classArr"
import { arrCreate } from "~utils/index"

export function DemoDialog() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Dialog Demo</h1>
      <div class={classArr(classesGridCols4xl, "gap-4")}>
        <BasicDialogDemo />
        <DialogWithDescriptionDemo />
        <DialogWithFormDemo />
        <DialogVariantsDemo />
        <DialogNestedDemo />
        <DialogLongContentDemo />
      </div>
    </div>
  )
}

function BasicDialogDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Dialog</h2>
      <NativeDialog
        buttonProps={{
          children: "Open Dialog",
          variant: buttonVariant.primary,
        }}
        title="Basic Dialog"
      >
        <div class="mt-4">
          <p>This is a basic dialog with simple content.</p>
          <p class="mt-2">Click the close button or outside to dismiss.</p>
        </div>
      </NativeDialog>
    </div>
  )
}

function DialogWithDescriptionDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Dialog with Description</h2>
      <NativeDialog
        buttonProps={{
          icon: mdiInformation,
          children: "Info Dialog",
          variant: buttonVariant.outline,
        }}
        title="Information"
        description="This dialog includes a description below the title."
      >
        <div class="mt-4">
          <p>Additional content goes here.</p>
          <p class="mt-2">The description provides context for the dialog's purpose.</p>
        </div>
      </NativeDialog>
    </div>
  )
}

function DialogWithFormDemo() {
  const [name, setName] = createSignal("")
  const [email, setEmail] = createSignal("")

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Dialog with Form</h2>
      <NativeDialog
        buttonProps={{
          icon: mdiPencil,
          children: "Edit Profile",
          variant: buttonVariant.success,
        }}
        title="Edit Profile"
        description="Update your account information"
      >
        <form class="mt-4 space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name()}
              onInput={(e) => setName(e.currentTarget.value)}
              class="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              class="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div class="flex gap-2 justify-end">
            <Button variant={buttonVariant.outline} type="button">
              Cancel
            </Button>
            <Button variant={buttonVariant.primary} type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </NativeDialog>
    </div>
  )
}

function DialogVariantsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Dialog Button Variants</h2>
      <div class="flex flex-wrap gap-4">
        <NativeDialog
          buttonProps={{
            children: "Default",
            variant: buttonVariant.default,
          }}
          title="Default Dialog"
        >
          <div class="mt-4">
            <p>This dialog uses the default button variant.</p>
          </div>
        </NativeDialog>

        <NativeDialog
          buttonProps={{
            icon: mdiAccount,
            children: "Ghost",
            variant: buttonVariant.ghost,
          }}
          title="Ghost Dialog"
        >
          <div class="mt-4">
            <p>This dialog uses the ghost button variant.</p>
          </div>
        </NativeDialog>

        <NativeDialog
          buttonProps={{
            children: "Destructive",
            variant: buttonVariant.destructive,
          }}
          title="Destructive Dialog"
        >
          <div class="mt-4">
            <p>This dialog uses the destructive button variant.</p>
          </div>
        </NativeDialog>
      </div>
    </div>
  )
}
function DialogNestedDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Dialog Nested</h2>
      <div class="flex flex-wrap gap-4">
        <NativeDialog
          buttonProps={{
            variant: buttonVariant.outline,
            children: "Show Nested Dialog",
          }}
          title={"Nested Dialog"}
        >
          <NativeDialog
            buttonProps={{
              variant: buttonVariant.outline,
              children: "Inside a nested Dialog",
            }}
            title={"Inside a nested Dialog"}
          >
            tada!
          </NativeDialog>
        </NativeDialog>
      </div>
    </div>
  )
}

function DialogLongContentDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Dialog Long Content</h2>
      <div class="flex flex-wrap gap-4">
        <NativeDialog
          buttonProps={{
            variant: buttonVariant.outline,
            children: "Show dialog",
          }}
          title={"My first dialog"}
        >
          <div class={"flex flex-col gap-20"}>
            {arrCreate(10, (i) => (
              <p>Dialog content {i}</p>
            ))}
          </div>
        </NativeDialog>
      </div>
    </div>
  )
}

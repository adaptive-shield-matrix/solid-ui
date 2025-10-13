import { mdiHeart } from "@mdi/js"
import { Button } from "~ui/interactive/button/Button.tsx"
import { buttonVariant } from "~ui/interactive/button/buttonCva.ts"
import { toastAdd } from "~ui/interactive/toast/toastAdd.ts"
import { toastVariant } from "~ui/interactive/toast/toastVariant.ts"

export function DemoToaster() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Toaster Demo</h1>
      <div class="space-y-8 max-w-2xl">
        <BasicToastsDemo />
        <ToastVariantsDemo />
        <ToastWithDescriptionDemo />
        <ToastWithCustomIconDemo />
        <ToastWithActionsDemo />
      </div>
    </div>
  )
}

function BasicToastsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Toasts</h2>
      <div class="flex flex-wrap gap-4">
        <Button
          variant={buttonVariant.default}
          onClick={() => toastAdd({ title: "Default Toast" })}
        >
          Default
        </Button>
        <Button
          variant={buttonVariant.primary}
          onClick={() => toastAdd({ title: "Primary Toast", variant: toastVariant.primary })}
        >
          Primary
        </Button>
        <Button
          variant={buttonVariant.success}
          onClick={() => toastAdd({ title: "Success Toast", variant: toastVariant.success })}
        >
          Success
        </Button>
      </div>
    </div>
  )
}

function ToastVariantsDemo() {
  const variants = Object.values(toastVariant)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Toast Variants</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {variants.map(variant => (
          <Button
            variant={buttonVariant.outline}
            onClick={() => toastAdd({
              title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`,
              variant: variant
            })}
          >
            {variant}
          </Button>
        ))}
      </div>
    </div>
  )
}

function ToastWithDescriptionDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Toasts with Description</h2>
      <div class="flex flex-wrap gap-4">
        <Button
          variant={buttonVariant.info}
          onClick={() => toastAdd({
            title: "Information",
            description: "This is a toast with additional description text.",
            variant: toastVariant.info
          })}
        >
          Info with Description
        </Button>
        <Button
          variant={buttonVariant.warning}
          onClick={() => toastAdd({
            title: "Warning",
            description: "Please be careful with this action.",
            variant: toastVariant.warning
          })}
        >
          Warning with Description
        </Button>
        <Button
          variant={buttonVariant.error}
          onClick={() => toastAdd({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: toastVariant.error
          })}
        >
          Error with Description
        </Button>
      </div>
    </div>
  )
}

function ToastWithCustomIconDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Toast with Custom Icon</h2>
      <Button
        variant={buttonVariant.primary}
        onClick={() => toastAdd({
          title: "Custom Icon Toast",
          description: "This toast has a custom heart icon.",
          icon: mdiHeart,
          variant: toastVariant.primary
        })}
      >
        Custom Icon
      </Button>
    </div>
  )
}

function ToastWithActionsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Toast with Actions</h2>
      <div class="space-y-4">
        <Button
          variant={buttonVariant.success}
          onClick={() => toastAdd({
            title: "Item Saved",
            description: "Your changes have been saved successfully.",
            variant: toastVariant.success,
            children: (
              <div class="mt-2 flex gap-2">
                <Button size="sm" variant={buttonVariant.outline}>
                  Undo
                </Button>
                <Button size="sm" variant={buttonVariant.primary}>
                  View
                </Button>
              </div>
            )
          })}
        >
          Toast with Actions
        </Button>
        <p class="text-sm text-muted-foreground">
          Toasts can contain interactive elements like buttons.
        </p>
      </div>
    </div>
  )
}

import { mdiAccount, mdiCog, mdiDotsVertical, mdiHeart } from "@mdi/js"
import { Button } from "~ui/interactive/button/Button.tsx"
import { buttonVariant } from "~ui/interactive/button/buttonCva.ts"
import { SimplePopover3 } from "~ui/interactive/popover/SimplePopover3.tsx"
import { toastAdd } from "~ui/interactive/toast/toastAdd.ts"
import { toastVariant } from "~ui/interactive/toast/toastVariant.ts"

export function DemoPopover() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Popover Demo</h1>
      <div class="space-y-8">
        <BasicPopoverDemo />
        <PopoverWithMenuDemo />
        <PopoverWithActionsDemo />
        <PopoverWithFormDemo />
      </div>
    </div>
  )
}

function BasicPopoverDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Popover</h2>
      <SimplePopover3
        buttonProps={{
          children: "Click me",
          variant: buttonVariant.outline,
        }}
      >
        <div class="p-4 min-w-48">
          <p class="text-sm">This is a simple popover content.</p>
          <p class="text-sm mt-2">It appears when you click the button.</p>
        </div>
      </SimplePopover3>
    </div>
  )
}

function PopoverWithMenuDemo() {
  const menuItems = [
    { label: "Profile", icon: mdiAccount, action: () => toastAdd({ title: "Profile clicked", variant: toastVariant.info }) },
    { label: "Settings", icon: mdiCog, action: () => toastAdd({ title: "Settings clicked", variant: toastVariant.info }) },
    { label: "Favorites", icon: mdiHeart, action: () => toastAdd({ title: "Favorites clicked", variant: toastVariant.info }) },
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Popover with Menu</h2>
      <SimplePopover3
        buttonProps={{
          icon: mdiDotsVertical,
          variant: buttonVariant.ghost,
          title: "Menu",
        }}
      >
        <div class="p-2 min-w-48">
          {menuItems.map(item => (
            <button
              class="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded flex items-center gap-2"
              onClick={item.action}
            >
              <span class="w-4 h-4">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </SimplePopover3>
    </div>
  )
}

function PopoverWithActionsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Popover with Actions</h2>
      <SimplePopover3
        buttonProps={{
          children: "Actions",
          variant: buttonVariant.primary,
        }}
      >
        <div class="p-4 min-w-48 space-y-2">
          <Button
            variant={buttonVariant.outline}
            class="w-full justify-start"
            onClick={() => toastAdd({ title: "Edit clicked", variant: toastVariant.success })}
          >
            Edit
          </Button>
          <Button
            variant={buttonVariant.outline}
            class="w-full justify-start"
            onClick={() => toastAdd({ title: "Delete clicked", variant: toastVariant.error })}
          >
            Delete
          </Button>
          <Button
            variant={buttonVariant.outline}
            class="w-full justify-start"
            onClick={() => toastAdd({ title: "Share clicked", variant: toastVariant.info })}
          >
            Share
          </Button>
        </div>
      </SimplePopover3>
    </div>
  )
}

function PopoverWithFormDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Popover with Form</h2>
      <SimplePopover3
        buttonProps={{
          children: "Quick Add",
          variant: buttonVariant.success,
        }}
      >
        <div class="p-4 min-w-64">
          <h3 class="font-semibold mb-3">Add New Item</h3>
          <form class="space-y-3">
            <input
              type="text"
              placeholder="Item name"
              class="w-full p-2 border rounded-md text-sm"
            />
            <textarea
              placeholder="Description (optional)"
              rows="2"
              class="w-full p-2 border rounded-md text-sm"
            />
            <div class="flex gap-2">
              <Button variant={buttonVariant.primary} size="sm" type="submit">
                Add
              </Button>
              <Button variant={buttonVariant.outline} size="sm" type="button">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </SimplePopover3>
    </div>
  )
}

import { createSignal } from "solid-js"
import type { TabItem } from "~ui/interactive/tabs/TabItem.tsx"
import { TabsTop2 } from "~ui/interactive/tabs/TabsTop2.tsx"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

export function DemoTabs() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Tabs Demo</h1>
      <div class="space-y-8">
        <BasicTabsDemo />
        <TabsWithContentDemo />
        <TabsWithAmountsDemo />
        <DisabledTabsDemo />
      </div>
    </div>
  )
}

function BasicTabsDemo() {
  const valueSignal = createSignalObject<TabItem>({ value: "tab1", label: "Tab 1" })

  const getOptions = () => [
    { value: "tab1", label: "Tab 1" },
    { value: "tab2", label: "Tab 2" },
    { value: "tab3", label: "Tab 3" },
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Tabs</h2>
      <TabsTop2 valueSignal={valueSignal} getOptions={getOptions} />
    </div>
  )
}

function TabsWithContentDemo() {
  const valueSignal = createSignalObject<TabItem>({
    value: "home",
    label: "Home",
    children: <div class="p-4">Welcome to the home tab content!</div>
  })

  const getOptions = () => [
    {
      value: "home",
      label: "Home",
      children: (
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Home Tab</h3>
          <p>This is the home tab content. You can put any JSX here.</p>
        </div>
      )
    },
    {
      value: "profile",
      label: "Profile",
      children: (
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Profile Tab</h3>
          <p>Profile information and settings would go here.</p>
          <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Name</label>
            <input type="text" class="border rounded px-3 py-2 w-full" placeholder="Your name" />
          </div>
        </div>
      )
    },
    {
      value: "settings",
      label: "Settings",
      children: (
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Settings Tab</h3>
          <p>Configure your preferences here.</p>
          <div class="mt-4 space-y-2">
            <label class="flex items-center gap-2">
              <input type="checkbox" />
              Enable notifications
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" />
              Dark mode
            </label>
          </div>
        </div>
      )
    },
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Tabs with Content</h2>
      <TabsTop2 valueSignal={valueSignal} getOptions={getOptions} />
    </div>
  )
}

function TabsWithAmountsDemo() {
  const [inboxCount, setInboxCount] = createSignal(5)
  const [archiveCount, setArchiveCount] = createSignal(12)

  const valueSignal = createSignalObject<TabItem>({
    value: "inbox",
    label: "Inbox",
    amount: inboxCount
  })

  const getOptions = () => [
    { value: "inbox", label: "Inbox", amount: inboxCount },
    { value: "sent", label: "Sent" },
    { value: "archive", label: "Archive", amount: archiveCount },
    { value: "trash", label: "Trash" },
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Tabs with Amounts</h2>
      <TabsTop2 valueSignal={valueSignal} getOptions={getOptions} />
      <div class="mt-4 flex gap-2">
        <button
          class="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setInboxCount(c => c + 1)}
        >
          Add to Inbox
        </button>
        <button
          class="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => setArchiveCount(c => c + 1)}
        >
          Add to Archive
        </button>
      </div>
    </div>
  )
}

function DisabledTabsDemo() {
  const valueSignal = createSignalObject<TabItem>({ value: "active1", label: "Active 1" })

  const getOptions = () => [
    { value: "active1", label: "Active 1" },
    { value: "disabled1", label: "Disabled 1", disabled: true },
    { value: "active2", label: "Active 2" },
    { value: "disabled2", label: "Disabled 2", disabled: true },
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Disabled Tabs</h2>
      <TabsTop2 valueSignal={valueSignal} getOptions={getOptions} />
      <p class="text-sm text-muted-foreground mt-2">
        Some tabs are disabled and cannot be selected.
      </p>
    </div>
  )
}

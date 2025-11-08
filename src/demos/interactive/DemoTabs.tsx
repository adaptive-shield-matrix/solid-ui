import { createSignal } from "solid-js"
import { TabsTop } from "~ui/interactive/tabs/TabsTop"
import { createSignalObject } from "~ui/utils/createSignalObject"

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
  const valueSignal = createSignalObject("tab1")

  const getOptions = () => ["tab1", "tab2", "tab3"]

  const valueText = (value: string) => {
    if (value === "tab1") return "Tab 1"
    if (value === "tab2") return "Tab 2"
    return "Tab 3"
  }

  const valueChildren = (value: string) => <div>Content for {value}</div>

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Tabs</h2>
      <TabsTop valueSignal={valueSignal} getOptions={getOptions} valueText={valueText} valueChildren={valueChildren} />
    </div>
  )
}

function TabsWithContentDemo() {
  const valueSignal = createSignalObject("home")

  const getOptions = () => ["home", "profile", "settings"]

  const valueText = (value: string) => {
    if (value === "home") return "Home"
    if (value === "profile") return "Profile"
    return "Settings"
  }

  const valueChildren = (value: string) => {
    if (value === "home")
      return (
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Home Tab</h3>
          <p>This is the home tab content. You can put any JSX here.</p>
        </div>
      )
    if (value === "profile")
      return (
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Profile Tab</h3>
          <p>Profile information and settings would go here.</p>
          <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Name</label>
            <input type="text" class="border rounded px-3 py-2 w-full" placeholder="Your name" />
          </div>
        </div>
      )
    return (
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
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Tabs with Content</h2>
      <TabsTop valueSignal={valueSignal} getOptions={getOptions} valueText={valueText} valueChildren={valueChildren} />
    </div>
  )
}

function TabsWithAmountsDemo() {
  const [inboxCount, setInboxCount] = createSignal(5)
  const [archiveCount, setArchiveCount] = createSignal(12)

  const valueSignal = createSignalObject("inbox")

  const getOptions = () => ["inbox", "sent", "archive", "trash"]

  const valueText = (value: string) => {
    if (value === "inbox") return "Inbox"
    if (value === "sent") return "Sent"
    if (value === "archive") return "Archive"
    return "Trash"
  }

  const valueAmount = (value: string) => {
    if (value === "inbox") return inboxCount()
    if (value === "archive") return archiveCount()
    return undefined
  }

  const valueChildren = (value: string) => <div>Content for {value}</div>

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Tabs with Amounts</h2>
      <TabsTop
        valueSignal={valueSignal}
        getOptions={getOptions}
        valueText={valueText}
        valueAmount={valueAmount}
        valueChildren={valueChildren}
      />
      <div class="mt-4 flex gap-2">
        <button class="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => setInboxCount((c) => c + 1)}>
          Add to Inbox
        </button>
        <button class="px-3 py-1 bg-green-500 text-white rounded" onClick={() => setArchiveCount((c) => c + 1)}>
          Add to Archive
        </button>
      </div>
    </div>
  )
}

function DisabledTabsDemo() {
  const valueSignal = createSignalObject("active1")

  const getOptions = () => ["active1", "active2"]

  const valueText = (value: string) => {
    if (value === "active1") return "Active 1"
    return "Active 2"
  }

  const valueChildren = (value: string) => <div>Content for {value}</div>

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Disabled Tabs</h2>
      <TabsTop
        valueSignal={valueSignal}
        getOptions={getOptions}
        valueText={valueText}
        valueChildren={valueChildren}
        disabled={true}
      />
      <p class="text-sm text-muted-foreground mt-2">All tabs are disabled.</p>
    </div>
  )
}

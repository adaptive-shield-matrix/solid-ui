import { Show } from "solid-js"
import { SidebarLayout } from "~ui/interactive/layout/SidebarLayout"
import { createSignalObject, type SignalObject } from "~ui/utils/createSignalObject"

export function DemoSidebar() {
  const isOpen = createSignalObject(true)

  return (
    <SidebarLayout
      isOpenSignal={isOpen}
      sidebar={<SidebarContent isOpen={isOpen} />}
      navbar={<NavbarContent isOpen={isOpen} />}
    >
      <p class="dark:text-white">Welcome to the application!</p>
      <p class="dark:text-white">Resize the window to see the responsive behavior.</p>
      {/* Your main content goes here */}
    </SidebarLayout>
  )
}

function NavbarContent(p: { isOpen: SignalObject<boolean> }) {
  return <h1 class="text-2xl font-semibold dark:text-white">Dashboard</h1>
}

function SidebarContent(p: { isOpen: SignalObject<boolean> }) {
  return (
    <>
      <div class="flex items-center justify-between p-4 border-b border-gray-700">
        <Show when={p.isOpen.get()}>
          <h2 class="text-xl font-bold text-white">My App</h2>
        </Show>
        {/* Toggle button is now handled in SidebarLayout */}
      </div>

      <nav aria-label="Main navigation" class="flex-1 p-4">
        <ul class="space-y-2">
          <li>
            <a
              href="/"
              class={`flex items-center p-2 rounded hover:bg-gray-700 text-white ${!p.isOpen.get() && "justify-center"}`}
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Home</title>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <Show when={p.isOpen.get()}>
                <span class="ml-3">Home</span>
              </Show>
            </a>
          </li>
          {/* ... more nav items ... */}
        </ul>
      </nav>
    </>
  )
}

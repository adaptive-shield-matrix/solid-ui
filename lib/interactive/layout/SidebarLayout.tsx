import { JSX, Show } from "solid-js"
import { createSignalObject, type SignalObject } from "~ui/utils/createSignalObject"
import type { MayHaveClassAndChildren } from "~ui/utils/MayHaveClassAndChildren"

export interface SidebarLayoutProps extends MayHaveClassAndChildren {
  isOpenSignal?: SignalObject<boolean>
  isMobileSignal?: SignalObject<boolean>

  sidebar: JSX.Element
  navbar?: JSX.Element
  children: JSX.Element
  navbarClass?:string
  sidebarClass?:string
}

export function SidebarLayout(p: SidebarLayoutProps) {
  const localOpen = p.isOpenSignal ?? createSignalObject(false)
  const localMobile = p.isMobileSignal ?? createSignalObject(false)
  const toggleMobile = () => localOpen.set(!localOpen.get())

  return (
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Desktop Sidebar - always present, collapsible on lg+ */}
      <aside
        class={`hidden lg:flex flex-col bg-gray-800 text-white transition-all duration-300 ease-in-out ${
          localOpen.get() ? "w-64" : "w-20"
        }`}
      >
        {p.sidebar}
      </aside>

      {/* Mobile Drawer */}
      <Show when={localMobile.get()}>
        <div
          class="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-sidebar-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            class="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMobile}
            aria-label="Close sidebar"
          />

          {/* Mobile Sidebar Panel */}
          <aside class="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col transform transition-transform duration-300 ease-in-out">
            {p.sidebar}
          </aside>
        </div>
      </Show>

      {/* Main Content Area */}
      <div class="flex-1 flex flex-col">
        {/* Header/Navbar */}
        <header class="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobile}
            aria-label="Open main menu"
            aria-expanded={localMobile.get()}
            class="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Menu</title>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Sidebar Toggle */}
          <button
            type="button"
            onClick={() => localOpen.set(!localOpen.get())}
            class="hidden lg:block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            aria-label={localOpen.get() ? "Collapse sidebar" : "Expand sidebar"}
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Toggle sidebar</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d={localOpen.get() ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"}
              />
            </svg>
          </button>

          {/* Custom Navbar Content */}
          {p.navbar}
        </header>

        {/* Main Content */}
        <main class="flex-1 p-4 overflow-y-auto">{p.children}</main>
      </div>
    </div>
  )
}

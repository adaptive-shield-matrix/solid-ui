import { Key } from "@solid-primitives/keyed"
import { Toast } from "~ui/interactive/toast/Toast"
import { toasterState } from "~ui/interactive/toast/toasterState"
import type { HasClass } from "~ui/utils/ui/HasClass"
import { classArr } from "~ui/utils/ui/classArr"

// const log = true
const log = false
/**
 * radix-ui
 * - demo - https://www.radix-ui.com/primitives/docs/components/toast
 * - src - https://github.com/radix-ui/primitives/blob/main/packages/react/toast/src/Toast.tsx
 * solid-toast
 * - demo - https://www.solid-toast.com/
 * - src - https://github.com/solidjs/solid-toast
 * kobalte
 * - demo - https://kobalte.netlify.app/docs/core/components/toast
 * - src - https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/toast/toast-list.tsx
 */
export function Toaster(p: HasClass) {
  return (
    <ul
      class={classArr(
        "fixed z-100 bottom-0 top-auto sm:right-0",
        "print:hidden",
        "p-4",
        "flex flex-col gap-4",
        "max-h-screen",
        p.class,
      )}
    >
      <Key each={toasterState.get().toasts} by={(t) => t.id}>
        {(t) => <Toast {...t()} />}
      </Key>
    </ul>
  )
}

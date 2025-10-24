import { createToasterState } from "~ui/interactive/toast/GlobalToasterState"
import { toasterState } from "~ui/interactive/toast/toasterState"

export function toastDismiss(toastId: string, log = false) {
  let op = "toastDismiss"
  const { toasts, timeouts } = toasterState.get()
  if (log) console.debug({ op, toastId })
  const newToasts = toasts.filter((t) => t.id !== toastId)
  const { [toastId]: _, ...newTimeouts } = timeouts
  if (toasts.length === newToasts.length && Object.keys(newTimeouts).length === Object.keys(timeouts).length) return
  toasterState.set({ toasts: newToasts, timeouts: newTimeouts })
}

export function toastDismissAll() {
  let op = "toastDismissAll"
  toasterState.set(createToasterState())
}

import type { ToastPropsInternal } from "~ui/interactive/toast/ToastProps"

export type GlobalToasterState = {
  toasts: ToastPropsInternal[]
  timeouts: Record<string, ReturnType<typeof setTimeout>>
}

export function createToasterState(): GlobalToasterState {
  return { toasts: [], timeouts: {} }
}

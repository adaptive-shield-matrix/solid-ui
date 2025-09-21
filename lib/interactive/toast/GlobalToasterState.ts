import type { ToastPropsInternal } from "~/interactive/toast/ToastProps.ts"

export type GlobalToasterState = {
  toasts: ToastPropsInternal[]
  timeouts: Record<string, ReturnType<typeof setTimeout>>
}

export function createToasterState(): GlobalToasterState {
  return { toasts: [], timeouts: {} }
}

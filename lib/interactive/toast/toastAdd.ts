import { generateToastId } from "~/interactive/toast/generateToastId"
import { toastDismiss } from "~/interactive/toast/toastDismiss"
import { toasterSettings } from "~/interactive/toast/toasterSettings"
import { toasterState } from "~/interactive/toast/toasterState"
import type { AddToastProps } from "~/interactive/toast/ToastProps"
import { toastVariant, toastVariantIcon } from "~/interactive/toast/toastVariant"

const log = true
// const log = false

export function toastAdd(addToast: AddToastProps): string {
  const op = "toastAdd"
  const { toasts, timeouts } = toasterState.get()
  if (log) {
    console.group(op, addToast.title, addToast.id)
    console.trace("given props:", addToast)
    console.trace({ msg: "toaster", toasts, timeouts })
  }
  // console.trace({ op, title: addToast.title })

  const toastId = addToast.id ?? generateToastId()

  // add icon if variant
  if (addToast.variant && addToast.icon == undefined) {
    const variantIcon = toastVariantIcon[addToast.variant]
    if (variantIcon) addToast.icon = variantIcon
  }

  const foundToastIndex = toasts.findIndex((t) => t.id === toastId)
  if (foundToastIndex >= 0) {
    // remove old timeout
    const timeout = timeouts[toastId]
    if (timeout) clearTimeout(timeout)
    // create new timeout
    const newTimeout = setTimeout(() => {
      toastDismiss(toastId)
    }, addToast.duration ?? toasterSettings.removeDelayMs)
    // update list: timeouts
    const newTimeouts = { ...timeouts, [toastId]: newTimeout }
    // update list: toasts
    const newToasts = toasts.with(foundToastIndex, { ...addToast, id: toastId })
    if (log) console.log("foundToast", toasts.at(foundToastIndex), "replacedByToast:", newToasts.at(foundToastIndex))
    toasterState.set({ toasts: newToasts, timeouts: newTimeouts })
    if (log) console.groupEnd()
    return toastId
  }

  const newToast = { ...addToast, id: toastId, duration: getDuration(addToast) }
  if (log) console.log({ op, newToast })

  const newToasts = [...toasts, newToast]
  while (newToasts.length > toasterSettings.toastLimit) {
    const deleteToast = newToasts.shift()
    if (log) console.log({ op, size: newToasts.length, msg: "deleting toast ", deleteToast })
    if (deleteToast) {
      const deleteTimeout = timeouts[deleteToast.id]
      if (deleteTimeout) clearTimeout(deleteTimeout)
    }
  }
  const timeout = setTimeout(() => {
    toastDismiss(toastId)
  }, addToast.duration ?? toasterSettings.removeDelayMs)
  const newTimeouts = { ...timeouts, [toastId]: timeout }

  if (log) {
    console.log({
      op,
      newToasterState: { toasts: newToasts, timeouts: newTimeouts },
      previousToasterState: { toasts, timeouts },
    })
    console.groupEnd()
  }
  toasterState.set({ toasts: newToasts, timeouts: newTimeouts })
  return toastId
}

function getDuration(t: AddToastProps) {
  const d = t.duration
  if (t.variant === toastVariant.error) {
    return d ? d : toasterSettings.removeDelayMs * 2
  }
  return d
}

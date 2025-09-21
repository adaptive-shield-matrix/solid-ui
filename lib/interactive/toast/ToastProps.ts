import type { JSXElement } from "solid-js"
import type { ToastVariant } from "~/interactive/toast/toastVariant.ts"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { HasClass } from "~/utils/ui/HasClass"

export type AddToastProps = {
  id?: string

  variant?: ToastVariant
  duration?: number

  icon?: string
  iconClass?: string

  title: string
  titleClass?: string

  description?: string
  descriptionClass?: string
} & HasClass &
  HasChildren

export type ToastPropsInternal = {
  id: string
  // variant: ToastVariant
} & AddToastProps

export type ToastProps = {
  id: string
  variant?: ToastVariant
  duration?: number
  icon?: string
  iconCn?: string
  title?: JSXElement
  description?: JSXElement
}

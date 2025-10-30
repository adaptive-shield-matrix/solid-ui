import type { JSXElement } from "solid-js"
import type { ToastVariant } from "~ui/interactive/toast/toastVariant"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface AddToastProps extends MayHaveClass, MayHaveChildren {
  id?: string

  variant?: ToastVariant
  duration?: number

  icon?: string
  iconClass?: string

  title: string
  titleClass?: string

  description?: string
  descriptionClass?: string
}

export interface ToastPropsInternal extends AddToastProps {
  id: string
  // variant: ToastVariant
}

export type ToastProps = {
  id: string
  variant?: ToastVariant
  duration?: number
  icon?: string
  iconCn?: string
  title?: JSXElement
  description?: JSXElement
}

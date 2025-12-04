import type { JSXElement } from "solid-js"
import type { ToastVariant } from "~ui/interactive/toast/toastVariant"
import type { HasTitle } from "~ui/utils/HasTitle"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveIcon } from "~ui/utils/MayHaveIcon"
import type { MayHaveId } from "~ui/utils/MayHaveId"

export interface AddToastProps extends MayHaveId, MayHaveIcon, HasTitle, MayHaveClass, MayHaveChildren {
  variant?: ToastVariant
  duration?: number

  description?: string
  descriptionClass?: string

  texts?: ToastTexts
}

export type ToastTexts = {
  close: string
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

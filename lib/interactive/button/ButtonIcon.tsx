import { mdiLoading } from "@mdi/js"
import { type Component, type ComponentProps, splitProps } from "solid-js"
import { Button } from "~ui/interactive/button/Button"
import type { ButtonVariant } from "~ui/interactive/button/buttonCva"
import { type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { Icon1 } from "~ui/static/icon/Icon1"
import { classMerge } from "~ui/utils/classMerge"

export interface ButtonIconProps extends ComponentProps<"button">, ButtonCvaProps {
  // icon
  icon?: string
  iconRight?: string
  iconClass?: string
  // loading
  isLoading?: boolean
  // validating
  validationMessage?: string
  validationVariant?: ButtonVariant
  validationIcon?: string
}

export const ButtonIcon: Component<ButtonIconProps> = (p) => {
  const [s, rest] = splitProps(p, [
    // icon
    "icon",
    "iconRight",
    "iconClass",
    // loading
    "isLoading",
    // validating
    "validationMessage",
    "validationVariant",
    "validationIcon",
    // button
    "variant",
    "size",
    "class",
    "disabled",
    "onClick",
    "children",
  ])
  const onClick2 = (e: any) => {
    if (s.disabled) return
    if (s.isLoading) return
    if (s.validationMessage) return
    if (s.onClick && typeof s.onClick === "function") {
      s.onClick(e)
    }
  }
  return (
    <Button
      class={classMerge(
        classesButtonClickAnimation,
        (s.isLoading || !!s.validationMessage) && "cursor-not-allowed",
        s.class,
      )}
      variant={s.validationMessage ? s.validationVariant : s.variant}
      size={s.size}
      onClick={onClick2}
      disabled={s.disabled}
      aria-disabled={s.isLoading || !!s.validationMessage}
      {...rest}
    >
      {(s.isLoading || s.validationMessage || s.icon) && (
        <Icon1
          path={(s.isLoading ? mdiLoading : s.validationMessage ? s.validationIcon : (s.icon ?? mdiLoading))!}
          class={buttonIconCva(
            s.validationMessage ? s.validationVariant : s.variant,
            s.children && "mr-2",
            s.isLoading && "animate-spin-faster",
            s.iconClass,
          )}
        />
      )}
      {s.validationMessage ? s.validationMessage : s.children}
      {!s.isLoading && !s.validationMessage && s.iconRight && (
        <Icon1
          path={s.iconRight}
          class={buttonIconCva(
            s.validationMessage ? s.validationVariant : s.variant,
            s.children && "ml-2",
            s.isLoading && "animate-spin-faster",
            s.iconClass,
          )}
        />
      )}
    </Button>
  )
}

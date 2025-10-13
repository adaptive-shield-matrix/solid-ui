import { mdiLoading } from "@mdi/js"
import { type Component, type ComponentProps, splitProps } from "solid-js"
import { Button } from "~/interactive/button/Button"
import type { ButtonVariant } from "~/interactive/button/buttonCva"
import { type ButtonCvaProps } from "~/interactive/button/buttonCva"
import { buttonIconCva } from "~/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~/interactive/button/classesButtonClickAnimation"
import { Icon1 } from "~/static/icon/Icon1"
import { classMerge } from "~/utils/ui/classMerge"

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
  const [, rest] = splitProps(p, [
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
  ])
  const onClick2 = (e: any) => {
    if (p.disabled) return
    if (p.isLoading) return
    if (p.validationMessage) return
    if (p.onClick) {
      // @ts-ignore
      p.onClick(e)
    }
  }
  return (
    <Button
      class={classMerge(
        classesButtonClickAnimation,
        (p.isLoading || !!p.validationMessage) && "cursor-not-allowed",
        p.class,
      )}
      variant={p.validationMessage ? p.validationVariant : p.variant}
      size={p.size}
      onClick={onClick2}
      disabled={p.disabled}
      aria-disabled={p.isLoading || !!p.validationMessage}
      {...rest}
    >
      {(p.isLoading || p.validationMessage || p.icon) && (
        <Icon1
          path={(p.isLoading ? mdiLoading : p.validationMessage ? p.validationIcon : (p.icon ?? mdiLoading))!}
          class={buttonIconCva(
            p.validationMessage ? p.validationVariant : p.variant,
            p.children && "mr-2",
            p.isLoading && "animate-spin-faster",
            p.iconClass,
          )}
        />
      )}
      {p.validationMessage ? p.validationMessage : p.children}
      {!p.isLoading && !p.validationMessage && p.iconRight && (
        <Icon1
          path={p.iconRight}
          class={buttonIconCva(
            p.validationMessage ? p.validationVariant : p.variant,
            p.children && "ml-2",
            p.isLoading && "animate-spin-faster",
            p.iconClass,
          )}
        />
      )}
    </Button>
  )
}

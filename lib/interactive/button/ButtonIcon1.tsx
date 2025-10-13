import { type Accessor, type Component, type ComponentProps, splitProps } from "solid-js"
import { buttonCva2, type ButtonCvaProps } from "~/interactive/button/buttonCva"
import { buttonIconCva } from "~/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~/interactive/button/classesButtonDisabled"
import { Icon1 } from "~/static/icon/Icon1"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { HasClass } from "~/utils/ui/HasClass"

export interface ButtonIcon1Props extends ComponentProps<"button">, ButtonCvaProps, HasClass, HasChildren {
  // icon
  icon?: string
  iconRight?: string
  iconClass?: string
  // disabled
  isDisabled?: Accessor<boolean>
}

export const ButtonIcon1: Component<ButtonIcon1Props> = (p) => {
  const [, rest] = splitProps(p, [
    // generic
    "class",
    "children",
    // button
    "variant",
    "size",
    "class",
    // icon
    "icon",
    "iconRight",
    "iconClass",
    // disabled
    "disabled",
    "isDisabled",
  ])
  const onClick2 = (e: any) => {
    if (p.isDisabled?.()) return
    if (p.disabled) return
    if (p.onClick) {
      // @ts-ignore
      p.onClick(e)
    }
  }
  return (
    <button
      class={buttonCva2(
        p.variant,
        p.size,
        classesButtonClickAnimation,
        (p.disabled || p.isDisabled?.()) && classesButtonDisabled,
        p.class,
      )}
      onClick={onClick2}
      aria-disabled={p.isDisabled?.()}
      type={p.type ?? "button"}
      {...rest}
    >
      {p.icon && <Icon1 path={p.icon} class={buttonIconCva(p.variant, p.children && "mr-2", p.iconClass)} />}
      {p.children}
      {p.iconRight && <Icon1 path={p.iconRight} class={buttonIconCva(p.variant, p.children && "ml-2", p.iconClass)} />}
    </button>
  )
}

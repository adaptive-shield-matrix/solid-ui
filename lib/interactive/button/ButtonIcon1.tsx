import { type Accessor, type Component, type ComponentProps, splitProps } from "solid-js"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { buttonCva2, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { Icon } from "~ui/static/icon/Icon"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface ButtonIcon1Props extends ComponentProps<"button">, ButtonCvaProps, MayHaveClass, MayHaveChildren {
  // icon
  icon?: string
  iconRight?: string
  iconClass?: string
  // disabled
  isDisabled?: Accessor<boolean>
}

export const ButtonIcon1: Component<ButtonIcon1Props> = (p) => {
  const [s, rest] = splitProps(p, [
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
    "type",
    "children",
    "onClick",
  ])
  const onClick2 = (e: any) => {
    if (s.isDisabled?.()) return
    if (s.disabled) return
    if (s.onClick) {
      // @ts-ignore
      s.onClick(e)
    }
  }
  return (
    <button
      class={buttonCva2(
        s.variant,
        s.size,
        classesButtonClickAnimation,
        (s.disabled || s.isDisabled?.()) && classesDisabledDirectly,
        s.class,
      )}
      onClick={onClick2}
      aria-disabled={s.isDisabled?.()}
      type={s.type ?? "button"}
      {...rest}
    >
      {s.icon && <Icon path={s.icon} class={buttonIconCva(s.variant, s.children && "mr-2", s.iconClass)} />}
      {s.children}
      {s.iconRight && <Icon path={s.iconRight} class={buttonIconCva(s.variant, s.children && "ml-2", s.iconClass)} />}
    </button>
  )
}

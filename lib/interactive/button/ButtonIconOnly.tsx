import { type Component, type ComponentProps, splitProps } from "solid-js"
import { buttonCvaIconOnly, type ButtonCvaProps } from "~/interactive/button/buttonCva"
import { buttonIconCva } from "~/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~/interactive/button/classesButtonDisabled"
import { Icon0 } from "~/static/icon/Icon0"
import type { HasChildren } from "~/utils/ui/HasChildren"
import { isDisabled } from "~/utils/ui/HasDisabled"
import { type HasIsLoading, isLoading } from "~/utils/ui/HasIsLoading"

export interface ButtonIconOnlyProps extends ComponentProps<"button">, ButtonCvaProps, HasIsLoading, HasChildren {
  title: string
  icon: string
  iconRight?: boolean
  iconClass?: string
}

export const ButtonIconOnly: Component<ButtonIconOnlyProps> = (p) => {
  const [, rest] = splitProps(p, [
    // button
    "variant",
    "size",
    "class",
    // state
    "isLoading",
    // icons
    "title",
    "icon",
    "iconRight",
    "iconClass",
    // default
    "children",
  ])
  return (
    <button
      class={buttonCvaIconOnly(p.variant, isLoading(p), isDisabled(p), classesButtonClickAnimation, p.class)}
      title={p.title}
      type={p.type ?? "button"}
      {...rest}
    >
      {!p.iconRight && (
        <Icon0
          path={p.icon}
          class={buttonIconCva(
            p.variant,
            p.children && "mr-2",
            p.isLoading && "animate-spin-faster",
            p.disabled && classesButtonDisabled,
            p.iconClass,
          )}
        />
      )}
      {p.children}
      {p.iconRight && <Icon0 path={p.icon} class={buttonIconCva(p.variant, p.iconClass)} />}
    </button>
  )
}

import { type Component, type ComponentProps, splitProps } from "solid-js"
import { buttonCvaIconOnly, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~ui/interactive/button/classesButtonDisabled"
import { Icon0 } from "~ui/static/icon/Icon0"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import { isDisabled } from "~ui/utils/MayHaveDisabledAccessor"
import { isLoading, type MayHaveIsLoading } from "~ui/utils/MayHaveIsLoading"

export interface ButtonIconOnlyProps extends ComponentProps<"button">, ButtonCvaProps, MayHaveIsLoading, MayHaveChildren {
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

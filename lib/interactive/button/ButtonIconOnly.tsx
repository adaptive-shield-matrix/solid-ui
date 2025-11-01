import { type Component, type ComponentProps, splitProps } from "solid-js"
import { buttonCvaIconOnly, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~ui/interactive/button/classesButtonDisabled"
import { Icon0 } from "~ui/static/icon/Icon0"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import { isDisabled } from "~ui/utils/MayHaveDisabledAccessor"
import { isLoading, type MayHaveIsLoading } from "~ui/utils/MayHaveIsLoading"

export interface ButtonIconOnlyProps
  extends ComponentProps<"button">,
    ButtonCvaProps,
    MayHaveIsLoading,
    MayHaveChildren {
  title: string
  icon: string
  iconRight?: boolean
  iconClass?: string
}

export const ButtonIconOnly: Component<ButtonIconOnlyProps> = (p) => {
  const [s, rest] = splitProps(p, [
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
    "type",
    "disabled",
    "children",
  ])
  return (
    <button
      class={buttonCvaIconOnly(s.variant, isLoading(p), isDisabled(p), classesButtonClickAnimation, s.class)}
      title={s.title}
      type={s.type ?? "button"}
      {...rest}
    >
      {!s.iconRight && (
        <Icon0
          path={s.icon}
          class={buttonIconCva(
            s.variant,
            s.children && "mr-2",
            s.isLoading && "animate-spin-faster",
            s.disabled && classesButtonDisabled,
            s.iconClass,
          )}
        />
      )}
      {s.children}
      {s.iconRight && <Icon0 path={s.icon} class={buttonIconCva(s.variant, s.iconClass)} />}
    </button>
  )
}

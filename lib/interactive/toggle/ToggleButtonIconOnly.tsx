import { type Component, type ComponentProps, splitProps } from "solid-js"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { buttonCvaIconOnly, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { Icon } from "~ui/static/icon/Icon"
import type { HasIcon } from "~ui/utils/HasIcon"
import type { HasTitle } from "~ui/utils/HasTitle"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import { isDisabled } from "~ui/utils/MayHaveDisabledAccessor"
import { isLoading, type MayHaveIsLoading } from "~ui/utils/MayHaveIsLoading"
import type { SignalObject } from "~ui/utils/createSignalObject"

export interface ToggleButtonIconOnlyProps
  extends Omit<ComponentProps<"button">, "title" | "onClick">,
    ButtonCvaProps,
    HasTitle,
    HasIcon,
    MayHaveIsLoading,
    MayHaveChildren {
  pressedSignal: SignalObject<boolean>
  onPressedChange?: (pressed: boolean) => void
  onClick?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void
}

export const ToggleButtonIconOnly: Component<ToggleButtonIconOnlyProps> = (p) => {
  const [s, rest] = splitProps(p, [
    "variant",
    "size",
    "class",
    "isLoading",
    "title",
    "icon",
    "iconClass",
    "type",
    "disabled",
    "pressedSignal",
    "onPressedChange",
    "onClick",
    "children",
  ])
  return (
    <button
      class={buttonCvaIconOnly(s.variant, isLoading(p), isDisabled(p), classesButtonClickAnimation, s.class)}
      title={s.title}
      type={s.type ?? "button"}
      aria-pressed={s.pressedSignal.get()}
      data-state={s.pressedSignal.get() ? "on" : "off"}
      data-disabled={isDisabled(p)}
      onClick={(e) => {
        const next = togglePressed(p)
        if (s.onPressedChange) {
          s.onPressedChange(next)
        }
        if (s.onClick) s.onClick(e)
      }}
      {...rest}
    >
      <Icon
        path={s.icon}
        class={buttonIconCva(
          s.variant,
          s.isLoading && "animate-spin-faster",
          s.disabled && classesDisabledDirectly,
          s.iconClass,
        )}
      />
      {s.children}
    </button>
  )
}

function togglePressed(
  s: Pick<ToggleButtonIconOnlyProps, "disabled" | "title" | "pressedSignal" | "onPressedChange" | "onClick">,
): boolean {
  let next = !s.pressedSignal.get()
  s.pressedSignal.set(next)
  return next
}

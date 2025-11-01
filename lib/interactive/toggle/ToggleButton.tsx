import { type ComponentProps, splitProps } from "solid-js"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { type MayHaveDisabledAccessor, isDisabled } from "~ui/utils/MayHaveDisabledAccessor"
import type { SignalObject } from "~ui/utils/createSignalObject"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/toggle/src/Toggle.tsx
 * https://github.com/mui/base-ui/blob/master/packages/react/src/toggle/useToggle.ts
 */
export interface ToggleButtonProps
  extends ToggleButtonStateProps,
    MayHaveClass,
    MayHaveChildren,
    Omit<MayHaveDisabledAccessor, "disabled">,
    ComponentProps<"button"> {
  title: string
  onClick?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void
  onPressedChange?: (pressed: boolean) => void
}

type ToggleButtonStateProps = {
  pressedSignal: SignalObject<boolean>
}

export function ToggleButton(p: ToggleButtonProps) {
  const [s, rest] = splitProps(p, ["title", "pressedSignal", "disabled", "onPressedChange", "onClick", "children"])
  return (
    <ButtonIcon
      type="button"
      title={s.title}
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
      {s.children}
    </ButtonIcon>
  )
}

function togglePressed(
  s: Pick<ToggleButtonProps, "disabled" | "title" | "pressedSignal" | "onPressedChange" | "onClick">,
): boolean {
  let prev = s.pressedSignal.get()
  let next = !prev
  s.pressedSignal.set(next)
  return next
}

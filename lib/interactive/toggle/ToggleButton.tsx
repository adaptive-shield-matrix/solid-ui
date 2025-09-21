
import { type ComponentProps, splitProps } from "solid-js"
import { ButtonIcon } from "~/interactive/button/ButtonIcon.tsx"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { HasClass } from "~/utils/ui/HasClass"
import { type HasDisabled, isDisabled } from "~/utils/ui/HasDisabled"
import type { SignalObject } from "~/utils/ui/createSignalObject"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/toggle/src/Toggle.tsx
 * https://github.com/mui/base-ui/blob/master/packages/react/src/toggle/useToggle.ts
 */
export type ToggleButtonProps = {
  title: string
  onClick?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void
  onPressedChange?: (pressed: boolean) => void
} & ToggleButtonStateProps &
  HasClass &
  HasChildren &
  HasDisabled &
  ComponentProps<"button">

type ToggleButtonStateProps = {
  pressedSignal: SignalObject<boolean>
}

export function ToggleButton(p: ToggleButtonProps) {
  const [, rest] = splitProps(p, ["title", "pressedSignal", "disabled", "onPressedChange", "onClick"])
  return (
    <ButtonIcon
      type="button"
      title={p.title}
      aria-pressed={p.pressedSignal.get()}
      data-state={p.pressedSignal.get() ? "on" : "off"}
      data-disabled={isDisabled(p)}
      onClick={(e) => {
        const next = togglePressed(p)
        if (p.onPressedChange) {
          p.onPressedChange(next)
        }
        if (p.onClick) p.onClick(e)
      }}
      {...rest}
    >
      {p.children}
    </ButtonIcon>
  )
}

function togglePressed(p: ToggleButtonProps): boolean {
  let prev = p.pressedSignal.get()
  let next = !prev
  p.pressedSignal.set(next)
  return next
}

import { computePosition, type ComputePositionConfig, flip, offset, shift } from "@floating-ui/dom"
import { createUniqueId, splitProps } from "solid-js"
import { ButtonIcon1, type ButtonIcon1Props } from "~/interactive/button/ButtonIcon1.tsx"
import type { HasClassAndChildren } from "~/utils/ui/HasClassAndChildren"
import { classArr } from "~/utils/ui/classArr"

export function SimplePopover3(p: { buttonProps: ButtonIcon1Props } & HasClassAndChildren) {
  const s = createNativePopoverState()
  const [a, buttonProps] = splitProps(p.buttonProps, ["onClick"])
  return (
    <>
      <ButtonIcon1
        popovertarget={s.popoverId}
        ref={s.buttonRef}
        onClick={(e) => {
          updatePosition(s.buttonRef, s.popoverRef)
          // @ts-ignore
          a.onClick?.(e)
        }}
        {...buttonProps}
      />
      <div
        id={s.popoverId}
        ref={s.popoverRef}
        popover
        class={classArr(
          "bg-white dark:bg-black dark:text-white", // bg
          "w-max absolute m-0",
          p.class,
        )}
        style={{ top: 0, left: 0 }}
      >
        {p.children}
      </div>
    </>
  )
}

function createNativePopoverState(popoverId = createUniqueId()) {
  let buttonRef: HTMLButtonElement | undefined
  let popoverRef: HTMLDivElement | undefined
  return {
    buttonRef,
    popoverRef,
    popoverId,
  }
}

function updatePosition(buttonRef: HTMLButtonElement | undefined, popoverRef: HTMLDivElement | undefined) {
  if (!buttonRef) return
  if (!popoverRef) return

  const options: Partial<ComputePositionConfig> = {
    placement: "bottom-start",
    // placement: "top",
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  }
  computePosition(buttonRef, popoverRef, options).then((pos) => {
    Object.assign(popoverRef.style, {
      left: `${pos.x}px`,
      top: `${pos.y}px`,
    })
  })
}

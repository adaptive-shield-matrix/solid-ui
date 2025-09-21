import { autoUpdate, computePosition, type ComputePositionConfig, flip, offset, shift } from "@floating-ui/dom"
import { createUniqueId } from "solid-js"
import { PageWrapper2 } from "~/static/container/PageWrapper2.tsx"
import { classArr } from "~/utils/classArr.ts"

/**
 * https://floating-ui.com/docs/tutorial
 */
export function DemoNativePopoverFloating() {
  const popoverId = createUniqueId()
  let buttonRef: HTMLButtonElement | undefined
  let popoverRef: HTMLDivElement | undefined

  return (
    <>
      <PageWrapper2>
        <button
          popovertarget={popoverId}
          ref={buttonRef}
          onClick={(e) => {
            updatePosition(buttonRef, popoverRef)
          }}
        >
          Open Popover
        </button>
      </PageWrapper2>
      <div
        id={popoverId}
        ref={popoverRef}
        popover
        class={classArr(
          "bg-white dark:bg-black dark:text-white", // bg
          "w-max absolute m-0",
        )}
        style={{ top: 0, left: 0 }}
      >
        Greetings, one and all!
      </div>
    </>
  )
}

function autoUpdatePosition(buttonRef: HTMLButtonElement | undefined, popoverRef: HTMLDivElement | undefined) {
  if (!buttonRef) return
  if (!popoverRef) return
  return autoUpdate(buttonRef, popoverRef, () => updatePosition(buttonRef, popoverRef))
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

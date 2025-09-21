import { createUniqueId } from "solid-js"
import { ButtonIcon } from "~/interactive/button/ButtonIcon.tsx"
import type { ButtonIcon1Props } from "~/interactive/button/ButtonIcon1.tsx"
import { type PopoverProps, SimplePopover } from "~/interactive/popover/SimplePopover.tsx"
import { classArr } from "~/utils/classArr.ts"
import { classMerge } from "~/utils/classMerge.ts"
import type { HasChildren } from "~/utils/HasChildren.ts"
import type { HasClass } from "~/utils/HasClass"

export function SimplePopover2(p: PopoverProps & { buttonProps: ButtonIcon1Props } & HasChildren & HasClass) {
  const buttonId = p.buttonProps.id ?? createUniqueId()
  const anchorId = createUniqueId()
  let anchorRef: HTMLDivElement | undefined
  return (
    <>
      <ButtonIcon id={buttonId} {...p.buttonProps} popovertarget={anchorId} />
      <div
        popover={"auto"}
        ref={anchorRef}
        id={anchorId}
        class={classArr("absolute", "bg-white dark:bg-black dark:text-white", "w-max", p.class)}
      />
      <SimplePopover
        // defaultOpen
        triggerElement={"#" + buttonId}
        anchorElement={anchorRef}
      >
        <div class={classMerge("bg-white dark:bg-black dark:text-white", "w-max", p.class)}>{p.children}</div>
        {/*{p.children}*/}
      </SimplePopover>
    </>
  )
}

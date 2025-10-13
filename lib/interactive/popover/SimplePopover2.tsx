import { createUniqueId } from "solid-js"
import { ButtonIcon } from "~/interactive/button/ButtonIcon"
import type { ButtonIcon1Props } from "~/interactive/button/ButtonIcon1"
import { type PopoverProps, SimplePopover } from "~/interactive/popover/SimplePopover"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { HasClass } from "~/utils/ui/HasClass"
import { classArr } from "~/utils/ui/classArr"
import { classMerge } from "~/utils/ui/classMerge"

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

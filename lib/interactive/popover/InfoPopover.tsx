import { mdiInformationOutline } from "@mdi/js"
import { ttt } from "~ui/i18n/ttt"
import { buttonSize, buttonVariant } from "~ui/interactive/button/buttonCva"
import { CorvuPopover } from "~ui/interactive/popover/CorvuPopover"
import type { HasChildren } from "~ui/utils/HasChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface InfoPopoverProps extends MayHaveClass, HasChildren {}

export function InfoPopover(p: InfoPopoverProps) {
  return (
    <CorvuPopover
      icon={mdiInformationOutline}
      iconClass="size-5 fill-gray-500"
      variant={buttonVariant.ghost}
      title={ttt("More Information")}
      size={buttonSize.minimal}
      class={p.class ?? "ml-2"}
    >
      {p.children}
    </CorvuPopover>
  )
}

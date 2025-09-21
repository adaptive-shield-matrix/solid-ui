import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { SimplePopover3 } from "~/interactive/popover/SimplePopover3.tsx"

export function DemoPopover() {
  return (
    <>
      <SimplePopover3 buttonProps={{ variant: buttonVariant.ghost, children: "Popover 1" }}>
        Popover 1 content
      </SimplePopover3>
      <SimplePopover3 buttonProps={{ variant: buttonVariant.ghost, children: "Popover 2" }}>
        Popover 2 content
        <SimplePopover3 buttonProps={{ variant: buttonVariant.ghost, children: "Popover 3" }}>
          Popover 3 content
        </SimplePopover3>
      </SimplePopover3>
    </>
  )
}

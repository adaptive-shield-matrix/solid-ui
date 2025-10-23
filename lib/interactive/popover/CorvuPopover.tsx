import Popover from "@corvu/popover"
import type { JSX } from "solid-js"
import { buttonCva2 } from "~ui/interactive/button/buttonCva"
import type { ButtonIcon1Props } from "~ui/interactive/button/ButtonIcon1"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~ui/interactive/button/classesButtonDisabled"
import { Icon1 } from "~ui/static/icon/Icon1"
import { classArr } from "~ui/utils/ui/classArr"
import type { HasChildren } from "~ui/utils/ui/HasChildren"
import type { HasClass } from "~ui/utils/ui/HasClass"

export interface CorvuPopoverProps extends HasClass, HasChildren, ButtonIcon1Props {
  // buttonProps: ButtonIcon1Props
  buttonChildren?: JSX.Element
}

export function CorvuPopover(p: CorvuPopoverProps) {
  // const [a, buttonProps] = splitProps(p.buttonProps, ["onClick"])
  return (
    <Popover
      floatingOptions={{
        offset: 8,
        flip: true,
        shift: true,
      }}
    >
      <Popover.Trigger
        class={buttonCva2(
          p.variant,
          p.size,
          classesButtonClickAnimation,
          (p.disabled || p.isDisabled?.()) && classesButtonDisabled,
          p.class,
        )}
      >
        {p.icon && <Icon1 path={p.icon} class={buttonIconCva(p.variant, p.buttonChildren && "mr-2", p.iconClass)} />}
        {p.buttonChildren}
        {p.iconRight && (
          <Icon1 path={p.iconRight} class={buttonIconCva(p.variant, p.buttonChildren && "ml-2", p.iconClass)} />
        )}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          class={classArr(
            "z-50", // positioning
            "px-3 py-3", // spacing
            "rounded-lg", // border
            "dark:border", // border
            "bg-white dark:bg-black", // background
            "shadow-md", // shadow
            "data-open:animate-in data-open:fade-in-50% data-open:slide-in-from-top-1 data-closed:animate-out data-closed:fade-out-50% data-closed:slide-out-to-top-1", // animations
          )}
        >
          {p.children}
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  )
}

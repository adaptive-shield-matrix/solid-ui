import Popover from "@corvu/popover"
import type { JSX } from "solid-js"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { buttonCva2 } from "~ui/interactive/button/buttonCva"
import type { ButtonIcon1Props } from "~ui/interactive/button/ButtonIcon1"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesPopoverContentMerge } from "~ui/interactive/popover/classesPopoverContent"
import { Icon } from "~ui/static/icon/Icon"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"

export interface CorvuPopoverProps extends MayHaveClass, MayHaveInnerClass, MayHaveChildren, ButtonIcon1Props {
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
          (p.disabled || p.isDisabled?.()) && classesDisabledDirectly,
          p.class,
        )}
      >
        {p.icon && <Icon path={p.icon} class={buttonIconCva(p.variant, p.buttonChildren && "mr-2", p.iconClass)} />}
        {p.buttonChildren}
        {p.iconRight && (
          <Icon path={p.iconRight} class={buttonIconCva(p.variant, p.buttonChildren && "ml-2", p.iconClass)} />
        )}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content class={classesPopoverContentMerge(p.innerClass)}>{p.children}</Popover.Content>
      </Popover.Portal>
    </Popover>
  )
}

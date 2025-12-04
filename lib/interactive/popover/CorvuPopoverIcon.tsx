import Popover from "@corvu/popover"
import { type Component, type ComponentProps, splitProps } from "solid-js"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { buttonCvaIconOnly, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesPopoverContentMerge } from "~ui/interactive/popover/classesPopoverContent"
import { Icon0 } from "~ui/static/icon/Icon0"
import type { HasIcon } from "~ui/utils/HasIcon"
import type { HasTitle } from "~ui/utils/HasTitle"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"
import { isLoading, type MayHaveIsLoading } from "~ui/utils/MayHaveIsLoading"

export interface CorvuPopoverIconProps
  extends Omit<ComponentProps<"button">, "title">,
    ButtonCvaProps,
    HasIcon,
    HasTitle,
    MayHaveClass,
    MayHaveInnerClass,
    MayHaveChildren,
    MayHaveIsLoading {}

export const CorvuPopoverIcon: Component<CorvuPopoverIconProps> = (p) => {
  const [s, rest] = splitProps(p, [
    // button
    "variant",
    "size",
    "class",
    // state
    "isLoading",
    "disabled",
    // icons
    "title",
    "icon",
    "iconClass",
    // popover
    "innerClass",
    "children",
  ])

  return (
    <Popover
      floatingOptions={{
        offset: 8,
        flip: true,
        shift: true,
      }}
    >
      <Popover.Trigger
        class={buttonCvaIconOnly(s.variant, isLoading(p), s.disabled, classesButtonClickAnimation, s.class)}
        title={s.title}
        {...rest}
      >
        <Icon0
          path={s.icon}
          class={buttonIconCva(
            s.variant,
            isLoading(p) && "animate-spin-faster",
            s.disabled && classesDisabledDirectly,
            s.iconClass,
          )}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content class={classesPopoverContentMerge(s.innerClass)}>{s.children}</Popover.Content>
      </Popover.Portal>
    </Popover>
  )
}

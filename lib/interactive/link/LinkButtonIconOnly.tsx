import { splitProps } from "solid-js"
import { buttonCvaIconOnly } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import type { LinkButtonProps } from "~ui/interactive/link/LinkButtonProps"
import { Icon1 } from "~ui/static/icon/Icon1"
import { isLoading } from "~ui/utils/MayHaveIsLoading"

export function LinkButtonIconOnly(p: LinkButtonProps) {
  const [s, rest] = splitProps(p, [
    "class",
    "href",
    "variant",
    "size",
    "newTab",
    "isLoading",
    "icon",
    "iconRight",
    "iconClass",
    "children",
  ])
  return (
    <a
      href={s.href}
      class={buttonCvaIconOnly(
        s.variant,
        isLoading(p),
        false,
        classesButtonClickAnimation,
        "break-all", // line breaks for long links
        s.class,
      )}
      target={s.newTab ? "_blank" : undefined}
      // disabled={disabled}
      {...rest}
    >
      {s.icon && <Icon1 path={s.icon} class={buttonIconCva(s.variant, s.children && "mr-2", s.iconClass)} />}
      {s.children}
      {s.iconRight && <Icon1 path={s.iconRight} class={buttonIconCva(s.variant, s.children && "ml-2", s.iconClass)} />}
    </a>
  )
}

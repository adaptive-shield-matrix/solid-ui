import { splitProps } from "solid-js"
import { buttonCvaIconOnly } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import type { LinkButtonProps } from "~ui/interactive/link/LinkButtonProps"
import { Icon1 } from "~ui/static/icon/Icon1"
import { isLoading } from "~ui/utils/HasIsLoading"

export function LinkButtonIconOnly(p: LinkButtonProps) {
  const [, rest] = splitProps(p, [
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
      href={p.href}
      class={buttonCvaIconOnly(
        p.variant,
        isLoading(p),
        false,
        classesButtonClickAnimation,
        "break-all", // line breaks for long links
        p.class,
      )}
      target={p.newTab ? "_blank" : undefined}
      // disabled={disabled}
      {...rest}
    >
      {p.icon && <Icon1 path={p.icon} class={buttonIconCva(p.variant, p.children && "mr-2", p.iconClass)} />}
      {p.children}
      {p.iconRight && <Icon1 path={p.iconRight} class={buttonIconCva(p.variant, p.children && "ml-2", p.iconClass)} />}
    </a>
  )
}

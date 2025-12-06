import { splitProps } from "solid-js"
import { buttonCva2 } from "~ui/interactive/button/buttonCva"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import type { LinkButtonProps } from "~ui/interactive/link/LinkButtonProps"
import { Icon } from "~ui/static/icon/Icon"

export function LinkButton(p: LinkButtonProps) {
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
      class={buttonCva2(
        s.variant,
        s.size,
        "break-all", // line breaks for long links
        s.class,
      )}
      target={s.newTab ? "_blank" : undefined}
      // disabled={disabled}
      {...rest}
    >
      {s.icon && <Icon path={s.icon} class={buttonIconCva(s.variant, s.children && "mr-2", s.iconClass)} />}
      {s.children}
      {s.iconRight && <Icon path={s.iconRight} class={buttonIconCva(s.variant, s.children && "ml-2", s.iconClass)} />}
    </a>
  )
}

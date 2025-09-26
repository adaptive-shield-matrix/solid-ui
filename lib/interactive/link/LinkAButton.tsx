import { splitProps } from "solid-js"
import { buttonCva2 } from "~/interactive/button/buttonCva.ts"
import { buttonIconCva } from "~/interactive/button/buttonIconCva.ts"
import type { LinkButtonProps } from "~/interactive/link/LinkButtonProps.tsx"
import { Icon1 } from "~/static/icon/Icon1"

export function LinkAButton(p: LinkButtonProps) {
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
      class={buttonCva2(
        p.variant,
        p.size,
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

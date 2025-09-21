import { A } from "@solidjs/router"
import { splitProps } from "solid-js"
import { buttonCvaIconOnly } from "~/interactive/button/buttonCva.ts"
import { buttonIconCva } from "~/interactive/button/buttonIconCva.ts"
import { classesButtonClickAnimation } from "~/interactive/button/classesButtonClickAnimation"
import type { LinkButtonProps } from "~/interactive/link/LinkButtonProps.tsx"
import { Icon1 } from "~/static/img/Icon1.tsx"
import { isLoading } from "~/utils/HasIsLoading"

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
    <A
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
    </A>
  )
}

import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { badgeCva1, type BadgeVariant } from "~ui/static/badge/badgeCva"

export interface BadgeProps extends ComponentProps<"div"> {
  variant?: BadgeVariant
}

export const Badge: Component<BadgeProps> = (p) => {
  const [, rest] = splitProps(p, ["variant", "class"])
  return <div class={badgeCva1(p.variant, p.class)} {...rest} />
}

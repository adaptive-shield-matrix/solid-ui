import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classMerge } from "~/utils/ui/classMerge"

export const Skeleton: Component<ComponentProps<"div">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return <div class={classMerge("bg-primary/10 animate-pulse rounded-md", p.class)} {...rest} />
}

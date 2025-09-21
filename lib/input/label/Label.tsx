import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classMerge } from "~/utils/classMerge.ts"

export const Label: Component<ComponentProps<"label">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return (
    <label
      class={classMerge(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        p.class
      )}
      {...rest}
    />
  )
}

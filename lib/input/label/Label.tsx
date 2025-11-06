import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classMerge } from "~ui/utils/classMerge"

export const Label: Component<ComponentProps<"label">> = (p) => {
  const [s, rest] = splitProps(p, ["class"])
  return (
    <label
      class={classMerge(
        "font-medium leading-none", // font
        "whitespace-nowrap", // no text wrapping
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70", // disabled
        s.class,
      )}
      {...rest}
    />
  )
}

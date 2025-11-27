import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classesLabel } from "~ui/input/label/classesLabel"
import { classMerge } from "~ui/utils/classMerge"

export const Label: Component<ComponentProps<"label">> = (p) => {
  const [s, rest] = splitProps(p, ["class"])
  return <label class={classMerge(classesLabel, s.class)} {...rest} />
}

import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classesInput } from "~ui/input/input/classesInput"
import { classMerge } from "~ui/utils/classMerge"

export const Input: Component<ComponentProps<"input">> = (p) => {
  const [s, rest] = splitProps(p, ["class"])
  return <input class={classMerge(classesInput, s.class)} dir="auto" {...rest} />
}

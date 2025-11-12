import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classesDisabledModifier } from "~ui/classes/classesDisabledModifier"
import { classMerge } from "~ui/utils/classMerge"

export const Input: Component<ComponentProps<"input">> = (p) => {
  const [s, rest] = splitProps(p, ["type", "class"])
  return (
    <input
      type={p.type}
      class={classMerge(
        "inline-flex", // layout
        "w-full", // sizing
        "bg-gray-50 dark:bg-gray-700", // bg
        "border border-input", // borders
        "rounded-md", // border radius
        "px-3 py-2", // spacing
        "placeholder:text-muted-foreground", // typography
        "file:border-0 file:bg-transparent file:font-medium", // file input styling
        "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2", // focus states
        classesDisabledModifier, // disabled
        s.class,
      )}
      dir="auto"
      {...rest}
    />
  )
}

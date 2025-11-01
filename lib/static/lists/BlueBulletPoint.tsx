import { type ComponentProps, splitProps } from "solid-js"
import { classesTextLink } from "~ui/classes/classesTextLink"
import { classMerge } from "~ui/utils/classMerge"

export interface BlueBulletPointProps extends ComponentProps<"span"> {}

export function BlueBulletPoint(p: BlueBulletPointProps) {
  const [s, rest] = splitProps(p, ["class"])
  return (
    <span
      class={classMerge(
        "text-xs select-none", // font
        "mr-1 mt-1.5", // spacing
        classesTextLink,
        s.class,
      )}
      style={{ "font-size": "0.5rem" }}
      aria-hidden={true}
      {...rest}
    >
      ●
    </span>
  )
}

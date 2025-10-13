import { type ComponentProps, splitProps } from "solid-js"
import { classMerge } from "~ui/utils/ui/classMerge"

export interface BlueBulletPointProps extends ComponentProps<"span"> {
}

export function BlueBulletPoint(p: BlueBulletPointProps) {
  const [, rest] = splitProps(p, ["class"])
  return (
    <span
      class={classMerge(
        "text-xs select-none", // font
        "mr-1 mt-1.5", // spacing
        "text-blue-500", // color
        p.class)}
      style={{ "font-size": "0.5rem" }}
      aria-hidden={true}
      {...rest}
    >
      ●
    </span>
  )
}

import { type ComponentProps, splitProps } from "solid-js"
import { classMerge } from "~/utils/ui/classMerge"

export interface BlackBulletPointProps extends ComponentProps<"span"> {
}

export function BlackBulletPoint(p: BlackBulletPointProps) {
  const [, rest] = splitProps(p, ["class"])
  return (
    <span
      class={classMerge(
        "text-xs select-none", // font
        "mt-1.5 mr-1.5", // spacing
        "text-black dark:text-white", // color
        p.class)}
      style={{ "font-size": "0.5rem" }}
      aria-hidden={true}
      {...rest}
    >
      ●
    </span>
  )
}

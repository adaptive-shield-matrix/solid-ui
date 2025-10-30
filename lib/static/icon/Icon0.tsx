import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface Icon0Props extends MayHaveClass {
  path: string
  title?: string
  color?: string | null
}

export function Icon0(p: Icon0Props) {
  return (
    <svg
      viewBox={"0 0 24 24"}
      aria-hidden={!p.title}
      stroke-width={0.5}
      stroke="currentColor"
      class={classMerge("fill-black dark:fill-white", p.class)}
    >
      <path d={p.path}></path>
    </svg>
  )
}

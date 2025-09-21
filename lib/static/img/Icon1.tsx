import { classMerge } from "~/utils/classMerge.ts"
import type { HasClass } from "~/utils/HasClass"

export type Icon1Props = {
  path: string
  title?: string
  color?: string | null
}

export function Icon1(p: Icon1Props & HasClass) {
  return (
    <svg
      viewBox={"0 0 24 24"}
      aria-hidden={!p.title}
      stroke-width={0.5}
      class={classMerge("size-6 shrink-0 align-middle dark:fill-white", p.class)}
    >
      <path d={p.path}></path>
    </svg>
  )
}

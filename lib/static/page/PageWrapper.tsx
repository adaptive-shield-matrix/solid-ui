import { classesBgGray } from "~ui/classes/classesBg"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

export interface PageWrapperProps extends MayHaveChildren, MayHaveClass {
  innerClass?: string
}

export function PageWrapper(p: PageWrapperProps) {
  return (
    <div class={classMerge("min-h-dvh w-full", classesBgGray, p.class)}>
      <div class={classMerge("max-w-7xl mx-auto", "dark:text-white", "p-4", p.innerClass)}>{p.children}</div>
    </div>
  )
}

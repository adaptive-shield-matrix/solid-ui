import { classesBgGray } from "~ui/classes/classesBg"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classArr } from "~ui/utils/classArr"

export interface PageWrapperProps extends MayHaveChildren, MayHaveClass {
  innerClass?: string
}

export function PageWrapper(p: PageWrapperProps) {
  return (
    <div class={classArr("min-h-dvh w-full", classesBgGray, p.class)}>
      <div class={classArr("max-w-7xl mx-auto", "dark:text-white", "p-4", p.innerClass)}>{p.children}</div>
    </div>
  )
}

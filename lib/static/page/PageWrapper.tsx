import { classesBgGray } from "~ui/classes/classesBg"
import type { HasChildren } from "~ui/utils/HasChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classArr } from "~ui/utils/classArr"

export interface PageWrapperProps extends HasChildren, MayHaveClass {
  innerClass?: string
}

export function PageWrapper(p: PageWrapperProps) {
  return (
    <div class={classArr("min-h-dvh w-full", classesBgGray, p.class)}>
      <div class={classArr("container max-w-7xl mx-auto", "space-y-8", "dark:text-white", "py-4 px-4", p.innerClass)}>
        {p.children}
      </div>
    </div>
  )
}

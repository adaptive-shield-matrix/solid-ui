import { classesBgGray } from "~ui/classes/classesBg"
import type { HasChildren } from "~ui/utils/ui/HasChildren"
import type { MayHaveClass } from "~ui/utils/ui/MayHaveClass"
import { classArr } from "~ui/utils/ui/classArr"

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

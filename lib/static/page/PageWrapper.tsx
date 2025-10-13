import { classesBgGray } from "~/classes/classesBg"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"
import { classArr } from "~/utils/ui/classArr"

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

import type { MayHaveClassAndChildren } from "~ui/utils/MayHaveClassAndChildren"
import { classMerge } from "~ui/utils/classMerge"

export interface PageWrapper2Props extends MayHaveClassAndChildren {
  innerClass?: string
}

export function PageWrapper2(p: PageWrapper2Props) {
  return (
    <div
      class={classMerge(
        "flex flex-col", // layout
        "px-2 sm:px-4 pb-4", // padding
        p.class
      )}
    >
      <div class={classMerge("mx-auto", p.innerClass)}>{p.children}</div>
    </div>
  )
}

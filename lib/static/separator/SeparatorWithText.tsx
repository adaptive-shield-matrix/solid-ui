import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveChildrenAndClassName } from "~ui/utils/MayHaveChildrenAndClassName"

export function SeparatorWithText(p: MayHaveChildrenAndClassName) {
  return (
    <div
      class={classMerge(
        "flex items-center",
        "before:mt-0.5 before:flex-1 before:border-t",
        "after:mt-0.5 after:flex-1 after:border-t",
        p.class,
      )}
    >
      {p.children}
    </div>
  )
}

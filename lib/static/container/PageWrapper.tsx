import { splitProps } from "solid-js"
import type { HasClassAndChildren } from "~ui/utils/ui/HasClassAndChildren"
import { classMerge } from "~ui/utils/ui/classMerge"

export interface PageWrapperProps extends HasClassAndChildren {
}

export function PageWrapper(p: PageWrapperProps) {
  const [, rest] = splitProps(p, ["class"])
  return (
    <div
      class={classMerge(
        "flex flex-col", // layout
        "px-2 pb-4 sm:px-4", // padding
        // "bg-gray-50 dark:bg-gray-950", // background colors
        p.class
      )}
      {...rest}
    />
  )
}

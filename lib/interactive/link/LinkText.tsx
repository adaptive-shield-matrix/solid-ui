import { splitProps } from "solid-js"
import type { LinkTextProps } from "~ui/interactive/link/LinkTextProps"
import { classMerge } from "~ui/utils/ui/classMerge"

export function LinkText(p: LinkTextProps) {
  const [, rest] = splitProps(p, ["class", "href"])
  return (
    <a
      href={p.href}
      class={classMerge(
        "text-blue-500 no-underline hover:underline", // colors
        "break-all", // line breaks
        p.class,
      )}
      {...rest}
    />
  )
}

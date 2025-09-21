import { splitProps } from "solid-js"
import type { LinkTextProps } from "~/interactive/link/LinkTextProps.tsx"
import { classMerge } from "~/utils/ui/classMerge"

export function LinkAText(p: LinkTextProps) {
  const [, rest] = splitProps(p, ["class", "href"])
  return (
    <a
      href={p.href}
      class={classMerge(
        "text-blue-500 no-underline hover:underline", // colors
        "break-all", // line breaks
        p.class
      )}
      {...rest}
    />
  )
}

import { splitProps } from "solid-js"
import { classesTextLink } from "~ui/classes/classesTextLink"
import type { LinkTextProps } from "~ui/interactive/link/LinkTextProps"
import { classMerge } from "~ui/utils/classMerge"

export function LinkText(p: LinkTextProps) {
  const [s, rest] = splitProps(p, ["class", "href"])
  return (
    <a
      href={s.href}
      class={classMerge(
        classesTextLink,
        "no-underline hover:underline", // underline
        "break-all", // line breaks
        s.class,
      )}
      {...rest}
    />
  )
}

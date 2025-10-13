import { splitProps } from "solid-js"
import { BulletLinks } from "~/interactive/list/BulletLinks"

export interface BulletLinksOProps {
  urlObject: Record<string, string>
  removeUrlPrefix?: string
  bulletClass?: string
  linkClass?: string
  itemClass?: string
}

export function BulletLinksO(p: BulletLinksOProps) {
  const [, rest] = splitProps(p, ["urlObject"])
  const names = Object.keys(p.urlObject)
  const urls = Object.values(p.urlObject)
  return (
    <BulletLinks
      urls={urls}
      display={names}
      {...rest}
    />
  )
}

import { splitProps } from "solid-js"
import { BulletLinks } from "~ui/interactive/list/BulletLinks"

export interface BulletLinksOProps {
  urlObject: Record<string, string>
  removeUrlPrefix?: string
  bulletClass?: string
  linkClass?: string
  itemClass?: string
}

export function BulletLinksO(p: BulletLinksOProps) {
  const [s, rest] = splitProps(p, ["urlObject"])
  const names = Object.keys(s.urlObject)
  const urls = Object.values(s.urlObject)
  return <BulletLinks urls={urls} display={names} {...rest} />
}

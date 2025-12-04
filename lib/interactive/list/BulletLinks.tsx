import { LinkText } from "~ui/interactive/link/LinkText"
import { BlueBulletPoint } from "~ui/static/lists/BlueBulletPoint"
import { classMerge } from "~ui/utils/classMerge"

export interface BulletLinksProps {
  urls: string[] | readonly string[]
  display?: string[] | readonly string[]
  onClick?: () => void
  removeUrlPrefix?: string
  bulletClass?: string
  linkClass?: string
  itemClass?: string
}

export function BulletLinks(p: BulletLinksProps) {
  return (
    <>
      {p.urls.map((url, i) => {
        const displayAs = p.display ? p.display[i] : p.removeUrlPrefix ? url.replace(p.removeUrlPrefix, "") : url
        return (
          <div class={classMerge("flex flex-row flex-nowrap content-center", p.itemClass)}>
            <BlueBulletPoint class={p.bulletClass} />
            <LinkText href={url} class={classMerge(p.linkClass)} onClick={p.onClick}>
              {displayAs}
            </LinkText>
          </div>
        )
      })}
    </>
  )
}

import { LinkText } from "~ui/interactive/link/LinkText"
import { PageWrapper2 } from "~ui/static/page/PageWrapper2"

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
 */
export function DemoNativePopover() {
  return (
    <PageWrapper2>
      <button popovertarget="my-popover">Open Popover</button>
      <div popover id="my-popover">
        Greetings, one and all!
      </div>
      <LinkText href={"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"}>Popover API</LinkText>
    </PageWrapper2>
  )
}

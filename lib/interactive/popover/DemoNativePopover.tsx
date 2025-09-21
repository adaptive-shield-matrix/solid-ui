import { LinkAText } from "~/interactive/link/LinkAText.tsx"
import { PageWrapper2 } from "~/static/container/PageWrapper2.tsx"

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
      <LinkAText href={"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"}>Popover API</LinkAText>
    </PageWrapper2>
  )
}

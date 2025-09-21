import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { classMerge } from "~/utils/classMerge.ts"
import type { HasClass } from "~/utils/HasClass"

export function Logo(p: HasClass) {
  return (
    <LinkButton variant={buttonVariant.ghost} href={"/"} class={classMerge(p.class)}>
      {"demos"}
    </LinkButton>
  )
}

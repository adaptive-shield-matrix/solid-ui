import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import type { HasClass } from "~/utils/ui/HasClass"
import { classMerge } from "~/utils/ui/classMerge"

export function Logo(p: HasClass) {
  return (
    <LinkButton variant={buttonVariant.ghost} href={"/"} class={classMerge(p.class)}>
      {"demos"}
    </LinkButton>
  )
}

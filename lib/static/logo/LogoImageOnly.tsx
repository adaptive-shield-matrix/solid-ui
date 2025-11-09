import { buttonVariant, type ButtonVariant } from "~ui/interactive/button/buttonCva"
import { LinkButtonIconOnly } from "~ui/interactive/link/LinkButtonIconOnly"
import { Img } from "~ui/static/img/Img"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

export interface LogoImageOnlyProps extends MayHaveClass {
  href?: string
  logoUrl?: string
  imageClass?: string
  variant?: ButtonVariant
}

export function LogoImageOnly(p: LogoImageOnlyProps) {
  return (
    <LinkButtonIconOnly
      href={p.href ?? "/"}
      variant={p.variant ?? buttonVariant.ghost}
      class={classMerge("flex gap-1.5", p.class)}
    >
      <Img src={p.logoUrl ?? "/logo.svg"} alt={"Logo"} zoomIn={false} class={classMerge("size-7 mr-1", p.imageClass)} />
    </LinkButtonIconOnly>
  )
}

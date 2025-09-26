import type { ButtonVariant } from "~/interactive/button/buttonCva"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { Img } from "~/static/img/Img"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"
import { classMerge } from "~/utils/ui/classMerge"

export interface LogoImageTextProps extends MayHaveClass {
  imageClass?: string
  logoText: string
  logoTextClass?: string
  variant?: ButtonVariant
}

export function LogoImageText(p: LogoImageTextProps) {
  return (
    <LinkButton href={"/"} variant={p.variant} class={classMerge("flex gap-1.5", p.class)}>
      <Img src={"/logo.svg"} alt={"Logo"} zoomIn={false} class={classMerge("mr-1", p.imageClass)} />
      <span class={classMerge("text-2xl font-bold", p.logoTextClass)}>{p.logoText}</span>
    </LinkButton>
  )
}

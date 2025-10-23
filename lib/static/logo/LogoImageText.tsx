import { buttonVariant, type ButtonVariant } from "~ui/interactive/button/buttonCva"
import { LinkButton } from "~ui/interactive/link/LinkButton"
import { Img } from "~ui/static/img/Img"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

export interface LogoImageTextProps extends MayHaveClass {
  imageClass?: string
  logoText: string
  logoTextClass?: string
  variant?: ButtonVariant
}

export function LogoImageText(p: LogoImageTextProps) {
  return (
    <LinkButton href={"/"} variant={p.variant ?? buttonVariant.ghost} class={classMerge("flex gap-1.5", p.class)}>
      <Img src={"/logo.svg"} alt={"Logo"} zoomIn={false} class={classMerge("size-7 mr-1", p.imageClass)} />
      <span class={classMerge("text-2xl font-bold", p.logoTextClass)}>{p.logoText}</span>
    </LinkButton>
  )
}

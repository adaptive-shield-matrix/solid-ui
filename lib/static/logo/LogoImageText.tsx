import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { Img } from "~/static/img/Img"
import { classMerge } from "~/utils/classMerge.ts"
import type { MayHaveClass } from "~/utils/MayHaveClass"

export interface LogoImageTextProps extends MayHaveClass {
  imageClass?: string
}

export function LogoImageText(p: LogoImageTextProps) {
  return (
    <LinkButton href={"/"} class={classMerge("flex gap-1.5", p.class)}>
      <Img src={"/logo.svg"} alt={"Logo"} zoomIn={false} class={classMerge("mr-1", p.imageClass)} />
      <span class="text-2xl font-bold">Postmaschiene</span>
    </LinkButton>
  )
}

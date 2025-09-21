import { buttonVariant } from "~/interactive/button/buttonCva"
import { LinkButtonIconOnly } from "~/interactive/link/LinkButtonIconOnly"
import { Img } from "~/static/img/Img"
import { classMerge } from "~/utils/classMerge.ts"
import type { MayHaveClass } from "~/utils/MayHaveClass"

export interface LogoImageOnlyProps extends MayHaveClass {
  imageClass?: string
}

export function LogoImageOnly(p: LogoImageOnlyProps) {
  return (
    <LinkButtonIconOnly href={"/"} variant={buttonVariant.ghost} class={classMerge("flex gap-1.5", p.class)}>
      <Img src={"/logo.svg"} alt={"Logo"} zoomIn={false} class={classMerge("size-7 mr-1", p.imageClass)} />
    </LinkButtonIconOnly>
  )
}

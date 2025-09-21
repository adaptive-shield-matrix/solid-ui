import type { MayHaveClass } from "~/utils/MayHaveClass"

export interface ImgProps extends MayHaveClass {
  src: string
  alt: string
  zoomIn?: boolean
}

export function Img(p: ImgProps) {
  return <img src={p.src} alt={p.alt} class={p.class} loading="lazy" draggable={false} decoding="async" />
}

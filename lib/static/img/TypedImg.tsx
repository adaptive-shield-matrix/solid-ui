import type { ImageType } from "./ImageType"
import { Img } from "./Img"

export interface TypedImgProps {
  img: ImageType
  srcPrefix?: string
  zoomIn?: boolean
  invertColorsInDarkMode?: boolean
  class?: string
}

export function TypedImg(p: TypedImgProps) {
  const isSvg = p.img.path.endsWith(".svg")
  return (
    <Img
      src={(p.srcPrefix ? p.srcPrefix : "") + p.img.path}
      alt={p.img.alt}
      invertColorsInDarkMode={p.invertColorsInDarkMode}
      class={p.class}
      width={isSvg ? undefined : p.img.width}
      height={isSvg ? undefined : p.img.height}
    />
  )
}

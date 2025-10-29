import type { ImageType } from "./ImageType"
import { Img } from "./Img"

export interface TypedImgProps {
  img: ImageType
  zoomIn?: boolean
  invertColorsInDarkMode?: boolean
  class?: string
}

/**
 * This assumes a cloudflare worker, that rewrites the /media-b2/ path to a backblaze b2 object storage
 */
function imageUrl(p: string) {
  return "/media-b2/" + p
}

export function TypedImg(p: TypedImgProps) {
  const isSvg = p.img.path.endsWith(".svg")
  return (
    <Img
      src={imageUrl(p.img.path)}
      alt={p.img.alt}
      invertColorsInDarkMode={p.invertColorsInDarkMode}
      class={p.class}
      width={isSvg ? undefined : p.img.width}
      height={isSvg ? undefined : p.img.height}
    />
  )
}

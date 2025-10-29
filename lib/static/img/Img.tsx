import { classesImgZoomInOnHover5 } from "~ui/static/img/classesImgZoomInOnHover5"
import { classInvertBlack } from "~ui/static/img/classInvertBlack"
import { classArr } from "~ui/utils/classArr"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface ImgProps extends MayHaveClass {
  src: string
  alt: string
  zoomIn?: boolean
  invertColorsInDarkMode?: boolean
  width?: string | number
  height?: string | number
}

export function Img(p: ImgProps) {
  return (
    <img
      src={p.src}
      alt={p.alt}
      class={classArr(p.zoomIn && classesImgZoomInOnHover5, p.invertColorsInDarkMode && classInvertBlack, p.class)}
      loading="lazy"
      decoding="async"
      draggable={false}
      width={p.width}
      height={p.height}
    />
  )
}

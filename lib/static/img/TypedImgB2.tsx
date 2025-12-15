import { TypedImg, type TypedImgProps } from "~ui/static/img/TypedImg"

/**
 * This assumes a cloudflare worker, that rewrites the /media-b2/ path to a backblaze b2 object storage
 */
export function TypedImgB2(p: TypedImgProps) {
  const newProps: TypedImgProps = { ...p, srcPrefix: "/media-b2/" }
  return <TypedImg {...newProps} />
}

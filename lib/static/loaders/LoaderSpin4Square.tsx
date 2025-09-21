import { classMerge } from "~/utils/classMerge.ts"
import type { HasClass } from "~/utils/HasClass"
import styles from "./LoaderSpin4Square.module.css"

/**
 * https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje
 */
export function LoaderSpin4Square(p: HasClass) {
  return <div class={classMerge(p.class, styles.LoaderSpin4Square)} />
}

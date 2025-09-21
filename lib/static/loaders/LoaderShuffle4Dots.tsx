import type { HasClass } from "~/utils/ui/HasClass"
import { classMerge } from "~/utils/ui/classMerge"
import styles from "./LoaderShuffle4Dots.module.css"

/**
 * https://dev.to/afif/adding-100-css-loaders-to-the-collection-of-500-css-loaders-2a3p
 */
export function LoaderShuffle4Dots(p: HasClass) {
  return <div class={classMerge(p.class, styles.LoaderShuffle4Dots)} />
}

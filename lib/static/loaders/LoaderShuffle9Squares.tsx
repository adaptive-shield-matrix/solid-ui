import type { JSXElement } from "solid-js"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import styles from "./LoaderShuffle9Squares.module.css"

/**
 * https://dev.to/afif/adding-100-css-loaders-to-the-collection-of-500-css-loaders-2a3p
 */
export function LoaderShuffle9Squares(p: MayHaveClass) {
  return <div class={classMerge(p.class, styles.LoaderShuffle9Squares)} />
}

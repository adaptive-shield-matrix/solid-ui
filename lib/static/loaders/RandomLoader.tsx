import { LoaderShuffle4Dots } from "~/static/loaders/LoaderShuffle4Dots"
import type { HasClass } from "~/utils/ui/HasClass"

export function RandomLoader(p: HasClass) {
  // const i = randomInteger(3)
  // switch (i) {
  //   default:
  //     return <LoaderShuffle9Squares class={p.class} />
  //   case 1:
  //     return <LoaderShuffle4Dots class={p.class} />
  //   case 2:
  //     return <LoaderSpin4Square class={p.class} />
  // }
  return (<LoaderShuffle4Dots class={p.class} />)
}

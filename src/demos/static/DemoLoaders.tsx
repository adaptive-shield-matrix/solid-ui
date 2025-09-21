import { LoaderShuffle4Dots } from "~/static/loaders/LoaderShuffle4Dots.tsx"
import { LoaderShuffle9Squares } from "~/static/loaders/LoaderShuffle9Squares"
import { LoaderSpin4Square } from "~/static/loaders/LoaderSpin4Square"
import type { HasClass } from "~/utils/HasClass"

export function DemoLoader(p: HasClass) {
  // const i = randomInteger(3)
  // switch (i) {
  //   default:
  //     return <LoaderShuffle9Squares class={p.class} />
  //   case 1:
  //     return <LoaderShuffle4Dots class={p.class} />
  //   case 2:
  //     return <LoaderSpin4Square class={p.class} />
  // }
  return (
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <LoaderShuffle9Squares class={p.class} />
      <LoaderShuffle4Dots class={p.class} />
      <LoaderSpin4Square class={p.class} />
    </div>
  )
}

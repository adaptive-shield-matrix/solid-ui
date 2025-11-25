import { ttt1 } from "~ui/i18n/ttt"
import { RandomLoader } from "~ui/static/loaders/RandomLoader"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export type LoadingPageText = {
  loading: (item?: string) => string
}

export interface LoadingPageProps extends MayHaveClass {
  loadingItem?: string
  texts?: LoadingPageText
}

export function LoadingPage(p: LoadingPageProps) {
  const texts =
    p.texts ??
    ({
      loading: (item?: string) => (item ? ttt1("Loading [X]...", item) : "Loading..."),
    } as const satisfies LoadingPageText)

  return (
    <div class={classMerge("flex w-full items-center justify-center", p.class)}>
      <div class={"flex flex-col items-center m-10"}>
        <h1 class={"text-3xl"}>{texts.loading(p.loadingItem)}</h1>
        <RandomLoader class={"m-4"} />
      </div>
    </div>
  )
}

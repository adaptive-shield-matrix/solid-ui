import { ttl1 } from "~ui/i18n/ttl"
import { RandomLoader } from "~ui/static/loaders/RandomLoader"
import { tbLoadingX } from "~ui/static/loaders/i18n/tbLoadingX"

export interface LoadingPageProps {
  loadingX?: string
  loadingText?: string
}

export function LoadingPage(p: LoadingPageProps) {
  return (
    <div class={"flex w-full items-center justify-center"}>
      <div class={"flex flex-col items-center m-10"}>
        <h1 class={"text-3xl"}>{p.loadingX ? ttl1(tbLoadingX, p.loadingX) : p.loadingText}</h1>
        <RandomLoader class={"m-4"} />
      </div>
    </div>
  )
}

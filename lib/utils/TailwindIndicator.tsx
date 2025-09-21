import { isProdEnv } from "~/env/isProdEnv.ts"
import { classMerge } from "~/utils/classMerge.ts"

export function TailwindIndicator() {
  if (isProdEnv()) return null

  return (
    <div
      class={classMerge(
        "fixed bottom-1 left-1 z-50", // position
        "flex size-6 items-center justify-center", // size
        "rounded-full p-3", // size
        "font-mono font-bold text-sm", // font
        "bg-zinc-100 dark:bg-zinc-900", // bg
        "select-none print:hidden",
      )}
    >
      <div class="block sm:hidden">xs</div>
      <div class="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">sm</div>
      <div class="hidden md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden">md</div>
      <div class="hidden lg:block xl:hidden 2xl:hidden 3xl:hidden">lg</div>
      <div class="hidden xl:block 2xl:hidden 3xl:hidden">xl</div>
      <div class="hidden 2xl:block 3xl:hidden">2xl</div>
      <div class="hidden 3xl:block">3xl</div>
    </div>
  )
}

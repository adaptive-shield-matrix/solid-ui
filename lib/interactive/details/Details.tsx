import { mdiChevronDown } from "@mdi/js"
import { Show, type JSXElement } from "solid-js"
import { Icon } from "~ui/static/icon/Icon"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveIcon } from "~ui/utils/MayHaveIcon"
import type { MayHaveSubtitle } from "~ui/utils/MayHaveSubtitle"
import type { MayHaveTitle } from "~ui/utils/MayHaveTitle"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"

export interface DetailsProps extends MayHaveClass, MayHaveIcon, MayHaveTitle, MayHaveSubtitle, MayHaveChildren {
  summaryClass?: string
  summaryEl?: JSXElement
}

export function Details(p: DetailsProps) {
  return (
    <details
      class={classMerge(
        "group",
        "bg-white dark:bg-gray-800",
        "rounded-lg border border-gray-200",
        "shadow-sm",
        "overflow-hidden",
        p.class,
      )}
    >
      <summary
        class={classArr(
          "flex flex-col sm:flex-row items-center justify-between",
          "p-6",
          "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          p.summaryClass,
        )}
      >
        <Show when={!p.summaryEl && p.title}>
          <div class={"flex flex-col sm:flex-row gap-4"}>
            <Show when={p.icon}>
              <Icon path={p.icon!} class="size-7 mt-1" />
            </Show>
            <div>
              <h3 class={"text-xl font-semibold"}>{p.title}</h3>
              <Show when={p.subtitle}>
                <p class={"text-muted-foreground mt-1"}>{p.subtitle}</p>
              </Show>
            </div>
          </div>
        </Show>
        <Show when={p.summaryEl}>{p.summaryEl}</Show>
        <Icon
          path={mdiChevronDown}
          class={classArr("size-7", "text-gray-400 dark:text-gray-600", "transition-transform group-open:rotate-180")}
        />
      </summary>
      {p.children}
    </details>
  )
}

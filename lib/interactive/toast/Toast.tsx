import { mdiClose } from "@mdi/js"
import { Show } from "solid-js"
import { ttt } from "~ui/i18n/ttt"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import type { ToastPropsInternal, ToastTexts } from "~ui/interactive/toast/ToastProps"
import { toastCva } from "~ui/interactive/toast/toastCva"
import { toastDismiss } from "~ui/interactive/toast/toastDismiss"
import { toastIconCva } from "~ui/interactive/toast/toastIconCva"
import { Icon } from "~ui/static/icon/Icon"
import { classMerge } from "~ui/utils/classMerge"

export function Toast(p: ToastPropsInternal) {
  const texts =
    p.texts ??
    ({
      close: ttt("Close Toast"),
    } as const)

  return (
    <li role="status" aria-live="polite" aria-atomic={true} data-state={"open"} class={toastCva(p.variant, p.class)}>
      <ToastHeader {...p} texts={texts} />
      <Show when={p.description}>
        <p class={classMerge("text-lg break-words", p.descriptionClass)}>{p.description}</p>
      </Show>
      {p.children}
    </li>
  )
}

interface ToastHeaderProps extends ToastPropsInternal {
  texts: ToastTexts
}

function ToastHeader(p: ToastHeaderProps) {
  return (
    <div class={classMerge("flex flex-wrap", "gap-2", "items-center", "print:hidden")}>
      <Show when={p.icon}>
        <Icon path={p.icon!} class={toastIconCva(p.variant, p.iconClass)} />
      </Show>
      <p class={classMerge("text-lg font-bold break-words flex-1", p.titleClass)}>{p.title}</p>
      <ButtonIcon
        variant={buttonVariant.ghost}
        title={p.texts.close}
        icon={mdiClose}
        iconClass={"text-white fill-white"}
        onClick={() => toastDismiss(p.id)}
      />
    </div>
  )
}

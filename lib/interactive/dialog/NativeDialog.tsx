import { mdiClose } from "@mdi/js"
import { createUniqueId, mergeProps, Show, splitProps } from "solid-js"
import { ct0 } from "~/i18n/ct0.ts"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { ButtonIcon, type ButtonIconProps } from "~/interactive/button/ButtonIcon.tsx"
import {
  createNativeDialogOpenStateSignal,
  type IsOpenSignalObject,
} from "~/interactive/dialog/createNativeDialogOpenStateSignal.ts"
import { tbCloseDialog } from "~/interactive/dialog/tbCloseDialog.ts"
import { classMerge } from "~/utils/classMerge.ts"
import { createSignalObject, type SignalObject } from "~/utils/createSignalObject.ts"
import type { HasChildren } from "~/utils/HasChildren.ts"
import type { HasClass } from "~/utils/HasClass"
import "./NativeDialog.module.css"

export type DialogButtonProps = Omit<ButtonIconProps, "id" | "type">

type DialogProps = {
  // trigger
  buttonProps: DialogButtonProps
  title: string
} & HasClass &
  HasChildren &
  Partial<DialogInternalProps>

type DialogInternalProps = {
  // trigger
  buttonProps: DialogButtonProps

  title: string
  titleClass?: string

  description?: string
  descriptionClass?: string
  //
  // internal
  //
  openByDefault: boolean
  titleId: string
  buttonId: string
  dialogId: string
  dialogRef: SignalObject<HTMLDialogElement | null>
  openState: IsOpenSignalObject
} & HasClass &
  HasChildren

function initProps(p: DialogProps): DialogInternalProps {
  let dialogRef = p.dialogRef ?? createSignalObject<HTMLDialogElement | null>(null)
  return mergeProps(
    {
      openByDefault: p.openByDefault ?? false,
      titleId: p.titleId ?? createUniqueId(),
      buttonId: p.buttonId ?? createUniqueId(),
      dialogId: p.dialogId ?? createUniqueId(),
      dialogRef: dialogRef,
      openState: p.openState ?? createNativeDialogOpenStateSignal(dialogRef, p.openByDefault ?? false),
    },
    p,
  )
}

/**
 * docs
 * - native dialog - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * - native dialog accessibility tips - https://www.dhiwise.com/post/html-dialog-best-practices-every-web-developer-should-know
 * - h2 justifications - https://github.com/mui/material-ui/issues/34250#issuecomment-1250266870
 * reference implementations
 * - corvu - https://github.com/corvudev/corvu/tree/main/packages/dialog
 * - base-ui - https://github.com/mui/base-ui/blob/master/packages/react/src/dialog/root/DialogRoot.tsx
 */
export function NativeDialog(pp: DialogProps) {
  const p = initProps(pp)
  const [a, buttonProps] = splitProps(p.buttonProps, ["onClick"])
  return (
    <>
      <ButtonIcon
        id={p.buttonId}
        type="button"
        onClick={(e) => {
          p.openState.open()
          if (a.onClick) {
            // @ts-ignore
            a.onClick(e)
          }
        }}
        {...buttonProps}
      />
      <dialog
        id={p.dialogId}
        aria-labelledby={p.titleId}
        open={p.openByDefault}
        closedby={undefined}
        ref={p.dialogRef.set}
        class={classMerge(
          "modal",
          "max-w-(--breakpoint-lg)",
          "bg-white dark:bg-gray-900 text-black dark:text-white", // bg
          "border border-black p-4 rounded-xl", // border
          p.class,
        )}
      >
        <div class={"flex flex-wrap items-center gap-2"}>
          <h2 id={p.titleId} tabindex="-1" class={classMerge("text-xl font-bold", p.titleClass)}>
            {p.title}
          </h2>
          <ButtonIcon
            variant={buttonVariant.ghost}
            title={ct0(tbCloseDialog)}
            icon={mdiClose}
            onClick={() => p.openState.close()}
          />
        </div>
        <Show when={p.description}>
          <p class={classMerge("text-muted-foreground", p.descriptionClass)}>{p.description}</p>
        </Show>
        {p.children}
      </dialog>
    </>
  )
}

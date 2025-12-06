import Dialog from "@corvu/dialog"
import { mdiClose } from "@mdi/js"
import type { JSX } from "solid-js"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { buttonCva2, buttonCvaIconOnly, buttonVariant } from "~ui/interactive/button/buttonCva"
import type { ButtonIcon1Props } from "~ui/interactive/button/ButtonIcon1"
import { buttonIconCva } from "~ui/interactive/button/buttonIconCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesDialogContentMerge, classesDialogOverlayMerge } from "~ui/interactive/dialog/classesDialogContent"
import type { CorcuDialogTexts } from "~ui/interactive/dialog/CorcuDialogTexts"
import { corvuDialogTextDefault } from "~ui/interactive/dialog/CorcuDialogTexts"
import { Icon } from "~ui/static/icon/Icon"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"

export interface CorvuDialogProps extends MayHaveClass, MayHaveInnerClass, MayHaveChildren, ButtonIcon1Props {
  buttonChildren?: JSX.Element
  title: string
  description?: string
  titleClass?: string
  descriptionClass?: string
  texts?: CorcuDialogTexts
}

export function CorvuDialog(p: CorvuDialogProps) {
  const texts = p.texts ?? corvuDialogTextDefault

  return (
    <Dialog>
      <Dialog.Trigger
        class={buttonCva2(
          p.variant,
          p.size,
          classesButtonClickAnimation,
          (p.disabled || p.isDisabled?.()) && classesDisabledDirectly,
          p.class,
        )}
      >
        {p.icon && <Icon path={p.icon} class={buttonIconCva(p.variant, p.buttonChildren && "mr-2", p.iconClass)} />}
        {p.buttonChildren}
        {p.iconRight && (
          <Icon path={p.iconRight} class={buttonIconCva(p.variant, p.buttonChildren && "ml-2", p.iconClass)} />
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class={classesDialogOverlayMerge()} />
        <Dialog.Content class={classesDialogContentMerge(p.innerClass)}>
          <header class="flex items-start justify-between mb-4">
            <div>
              <Dialog.Label class={classMerge("text-lg font-semibold", p.titleClass)}>{p.title}</Dialog.Label>
              {p.description && (
                <Dialog.Description class={classMerge("text-muted-foreground", p.descriptionClass)}>
                  {p.description}
                </Dialog.Description>
              )}
            </div>
            <Dialog.Close class={buttonCvaIconOnly(buttonVariant.outline, false, false)} title={texts.closeDialog}>
              <Icon path={mdiClose} class={buttonIconCva(buttonVariant.outline, "")} />
            </Dialog.Close>
          </header>
          {p.children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

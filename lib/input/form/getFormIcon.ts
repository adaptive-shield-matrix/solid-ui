import { mdiAlert, mdiPlus, mdiSquareEditOutline, mdiTrashCan } from "@mdi/js"
import { type FormModeE, formModeE } from "~ui/input/form/formMode"

export function getFormIcon(mode: FormModeE) {
  return formIcon[mode]
}

export const formIcon = {
  [formModeE.add]: mdiPlus,
  [formModeE.edit]: mdiSquareEditOutline,
  [formModeE.remove]: mdiTrashCan,
  [formModeE.error]: mdiAlert,
} as const satisfies Record<FormModeE, string>

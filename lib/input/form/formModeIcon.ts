import { mdiCardTextOutline, mdiPlus, mdiSquareEditOutline, mdiTrashCan } from "@mdi/js"
import { formMode, type FormMode } from "~ui/input/form/formMode"

export const formModeIcon = {
  [formMode.view]: mdiCardTextOutline,
  [formMode.add]: mdiPlus,
  [formMode.edit]: mdiSquareEditOutline,
  [formMode.remove]: mdiTrashCan,
} as const satisfies Record<FormMode, string>

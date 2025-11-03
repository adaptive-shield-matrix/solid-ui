export type FormMode = keyof typeof formMode

export const formMode = {
  add: "add",
  edit: "edit",
  remove: "remove",
} as const

export type FormModeE = keyof typeof formModeE

export const formModeE = {
  ...formMode,
  error: "error",
} as const

export type FormModeView = keyof typeof formModeView

export const formModeView = {
  ...formMode,
  view: "view",
} as const

export type FormModeMutate = keyof typeof formModeMutate
export const formModeMutate = {
  edit: "edit",
  remove: "remove",
} as const

export function getFormTitle(mode: FormMode, subject: string) {
  switch (mode) {
    case formMode.add:
      return "Add " + subject
    case formMode.edit:
      return "Edit " + subject
    case formMode.remove:
      return "Remove " + subject
  }
}

export interface HasFormModeMutate {
  mode: FormModeMutate
}

export function formModeViewIsReadOnly(mode: FormModeView): boolean {
  return mode === formModeView.view || mode === formModeView.remove
}

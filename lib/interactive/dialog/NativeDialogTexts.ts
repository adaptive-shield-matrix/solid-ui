import { ttt } from "~ui/i18n/ttt"

export type NativeDialogTexts = {
  closeDialog: string
}

export const nativeDialogTextDefault = {
  closeDialog: ttt("Close dialog"),
} as const satisfies NativeDialogTexts

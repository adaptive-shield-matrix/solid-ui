import { toastVariant, type ToastVariant } from "~ui/interactive/toast/toastVariant"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"

const classesTextFillBlack = "text-black fill-black"
const classesTextFillWhite = "text-white fill-white"

const classesBlackWhite = classArr(
  classesTextFillBlack,
  "dark:text-white", // dark text
  "dark:fill-white", // dark fill
)

const classesWhiteWhite = classArr(
  classesTextFillWhite,
  "dark:text-white", // dark text
  "dark:fill-white", // dark fill
)

const variants = {
  // filled grayscale
  filled: classesBlackWhite,
  subtle: classesBlackWhite,
  default: classArr(classesTextFillWhite, "dark:text-black dark:fill-black"),
  // filled colors
  primary: classArr(classesTextFillWhite, "dark:text-indigo-100 dark:fill-indigo-100"),
  // filled colors status
  success: classesWhiteWhite,
  info: classesWhiteWhite,
  warning: classesWhiteWhite,
  error: classesWhiteWhite,
} as const satisfies Record<ToastVariant, string>

const defaultVariant = toastVariant.default

export function toastIconCva(
  variant: ToastVariant | null = defaultVariant,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  return classMerge(
    "size-6 min-w-6 min-h-6",
    variants[variant ?? defaultVariant], ...customClasses)
}

import { classesButtonClickAnimation } from "~/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~/interactive/button/classesButtonDisabled"
import { classArr } from "~/utils/ui/classArr"
import { classMerge } from "~/utils/ui/classMerge"

export type ButtonVariant = keyof typeof buttonVariant
export const buttonVariant = {
  // transparent bg
  outline: "outline",
  ghost: "ghost",
  link: "link",
  // filled black/white/gray
  filled: "filled",
  subtle: "subtle",
  default: "default",
  // filled colors
  primary: "primary",
  destructive: "destructive",
  warning: "warning",
  success: "success",
  info: "info",
  // outlined colors
  error: "error",
} as const

export type ButtonSize = keyof typeof buttonSize
export const buttonSize = {
  none: "none",
  minimal: "minimal",
  sm: "sm",
  default: "default",
  lg: "lg",
} as const

export type ButtonCvaProps = {
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseClasses = classArr(
  "inline-flex", // layout
  "font-medium", // text
  "items-center justify-center", // layout children
  "rounded-md ring-offset-background", // rounded, rings
  "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", // focus
  "transition-colors", // animation
  "group",
  "cursor-pointer",
)

const variantClasses = {
  //
  // transparent bg
  //
  outline: classArr(
    "bg-transparent dark:bg-transparent",
    "dark:text-slate-100", // text
    "hover:bg-slate-100", // bg hover
    "border border-slate-200 dark:border-slate-700 dark:hover:bg-slate-900", // border
  ),
  ghost: classArr(
    "dark:text-slate-100 dark:hover:text-slate-100", // text
    "bg-transparent dark:bg-transparent", // bg
    "data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent", // bg data
    "hover:bg-slate-100 dark:hover:bg-slate-800", // bg hover
  ),
  link: classArr(
    "text-slate-900 dark:text-slate-100", // text
    "underline-offset-4 hover:underline ", // underline
    "bg-transparent dark:bg-transparent", // bg
    "hover:bg-transparent dark:hover:bg-transparent", // bg hover
  ),
  //
  // filled grayscale
  //
  filled: classArr(
    "dark:text-slate-100", // text
    "bg-white dark:bg-black", // bg
    "hover:bg-slate-50 dark:hover:bg-slate-900", // bg hover
  ),
  subtle: classArr(
    "text-slate-900 dark:text-slate-100", // text
    "bg-slate-100 dark:bg-slate-700", // bg
    "hover:bg-slate-200 dark:hover:bg-slate-600", // bg hover
  ),
  default: classArr(
    "text-white dark:text-slate-900 dark:hover:text-slate-900", // text
    "bg-slate-900 dark:bg-slate-50", // bg
    "hover:bg-slate-700 dark:hover:bg-slate-300", // bg hover
  ),
  //
  // filled colors
  //
  primary: classArr(
    "text-white dark:text-indigo-100 ", // text
    "bg-indigo-500 dark:bg-indigo-800 ", // bg
    "hover:bg-indigo-700 dark:hover:bg-indigo-600", // bg hover
    "focus:ring-indigo-400 dark:focus:ring-indigo-400", // focus
  ),
  destructive: classArr(
    "text-white", // text
    "bg-red-500 dark:bg-red-700", // bg
    "hover:bg-red-600 dark:hover:bg-red-600", // bg hover
    "focus:ring-red-400 dark:focus:ring-red-400", // focus
  ),
  warning: classArr(
    "text-white dark:text-indigo-100 ", // text
    "bg-yellow-500 dark:bg-yellow-700 ", // bg
    "hover:bg-yellow-600 dark:hover:bg-yellow-600", // bg hover
    "focus:ring-yellow-400 dark:focus:ring-yellow-400", // focus
  ),
  success: classArr(
    "text-white", // text
    "bg-green-500 hover:bg-green-700 dark:hover:bg-green-700", // bg
    "focus:ring-green-400 dark:focus:ring-green-400", // focus
  ),
  info: classArr(
    "text-white", // text
    "bg-sky-500 hover:bg-sky-700 dark:hover:bg-sky-700", // bg
    "focus:ring-sky-400 dark:focus:ring-sky-400", // focus
  ),
  //
  // outline toast colors
  //
  error: classArr(
    "text-destructive dark:text-red-500", // text
    "border border-red-200 dark:border-red-700", // border
    "bg-transparent", // bg
    "hover:bg-red-100 dark:hover:bg-red-950", // bg hover
    "focus:ring-red-400 dark:focus:ring-red-400", // focus
  ),
} as const satisfies Record<ButtonVariant, string>

const sizeClasses = {
  none: "",
  minimal: "rounded-none",
  sm: "px-3",
  default: "py-2 px-3",
  lg: "px-8 py-4 text-lg",
} as const satisfies Record<ButtonSize, string>

const defaultVariant = buttonVariant.default
const defaultSize = buttonSize.default

export function buttonCva1(
  variant: ButtonVariant | null = defaultVariant,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  return buttonCva2(variant, null, ...customClasses)
}

export function buttonCva2(
  variant: ButtonVariant | null = defaultVariant,
  size: ButtonSize | null = defaultSize,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  const v = variant ?? defaultVariant
  const s = size ?? defaultSize
  return classMerge(baseClasses, variantClasses[v], sizeClasses[s], combinedClasses(v, s), customClasses)
}

function combinedClasses(variant: ButtonVariant, size: ButtonSize) {
  const variantGroup1 =
    variant === buttonVariant.outline || variant === buttonVariant.warning || variant === buttonVariant.error
  if (variantGroup1 && size === buttonSize.lg) {
    return "border-2"
  }
  return null
}

export function buttonCvaIconOnly(
  variant: ButtonVariant | undefined,
  isLoading: boolean | undefined,
  isDisabled: boolean | undefined,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  const classes = buttonCva2(
    variant,
    buttonSize.none,
    classesButtonClickAnimation,
    "rounded-full p-2.5",
    (isDisabled || isLoading) && classesButtonDisabled,
    ...customClasses,
  )
  return classes
}

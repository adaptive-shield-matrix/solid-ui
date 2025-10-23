import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"

export type BadgeVariant = keyof typeof badgeVariant

export const badgeVariant = {
  // transparent bg
  subtle: "subtle",
  outline: "outline",
  // colors 1
  default: "default",
  primary: "primary",
  secondary: "secondary",
  // secondary: "secondary",
  destructive: "destructive",
  // colors 2
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
} as const

const baseClasses = classArr(
  "inline-flex items-center", // layout
  "text-sm", // text
  "px-2.5 py-0.5 border rounded-full", // padding
  "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", // focus ring
)

const variantClasses = {
  default:
    "bg-slate-900 hover:bg-slate-700 dark:hover:text-white border-transparent text-primary-foreground dark:bg-slate-50 dark:text-slate-900",
  primary: "bg-primary hover:bg-primary/80 dark:hover:text-white border-transparent text-primary-foreground",
  secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
  success: "bg-green-500 text-white border-green-500",
  error: "bg-red-600 text-white border-red-600 dark:border-red-600",
  info: "bg-sky-500 text-white border-sky-500",
  warning: "bg-yellow-500 text-white border-yellow-500",
  destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
  subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
  outline: "text-foreground",
} as const satisfies Record<BadgeVariant, string>

const defaultVariant = badgeVariant.default

export function badgeCva1(
  variant: BadgeVariant | null = defaultVariant,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  return classMerge(baseClasses, variantClasses[variant ?? defaultVariant], customClasses)
}

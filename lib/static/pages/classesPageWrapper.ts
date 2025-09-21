import { classArr } from "~/utils/classArr"

export const classesPageWrapperOuter = classArr(
  "flex flex-col items-center justify-center", // layout
  "min-h-screen", // sizing
  "bg-gray-50 dark:bg-gray-900", // background
  "p-4", // spacing
)

export const classesPageWrapperInner = classArr(
  "max-w-md w-full", // sizing
  "bg-white dark:bg-gray-800", // background
  "rounded-lg shadow-md", // styling
  "p-8", // spacing
)

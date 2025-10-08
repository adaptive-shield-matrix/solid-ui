import { classArr } from "~/utils/ui/classArr"

export const classesGridCols2ContentFr = "grid grid-cols-[max-content_1fr]"
export const classesGridCols3MaxMinFr = "grid grid-cols-[max-content_min-content_1fr]"

/**
 * ~600 px (37rem, ~60ch) / col
 */
export const classesGridCols2xl = classArr("grid grid-cols-1", "xl:grid-cols-2")
export const classesGridCols2xl3 = classArr(classesGridCols2xl, "2xl:grid-cols-4", "3xl:grid-cols-6")

/**
 * ~400 px (25rem, ~40ch) / col
 */
export const classesGridCols3xl = classArr("grid grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3")
export const classesGridCols3xl3 = classArr(classesGridCols3xl, "2xl:grid-cols-6", "3xl:grid-cols-9")

/**
 * ~320 px (18rem, ~32ch) / col
 * 4 = 4x1, 2x2
 * xl: 1280/320 = 4
 * lg: 1024/320 = 3.2
 * md: 768/320 = 2.4
 * sm: 640/320 = 2
 * xs: 400/320 = 1.25
 */
export const classesGridCols4xl = classArr("grid grid-cols-1", "sm:grid-cols-2", "md:grid-cols-2", "xl:grid-cols-4")
export const classesGridCols4xl3 = classArr(classesGridCols4xl, "2xl:grid-cols-8", "3xl:grid-cols-12")

/**
 *
 * ~200 px (13rem, ~20ch) / col
 * 6 = 6x1, 3x2, 2x3
 * xl: 1280/200 = 6.4
 * lg: 1024/200 = 5.12
 * md: 768/200 = 3.84
 * sm: 640/200 = 3.2
 * xs: 400/200 = 2
 */
export const classesGridCols6xl = classArr("grid grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "xl:grid-cols-6")
export const classesGridCols6xl3 = classArr(classesGridCols6xl, "2xl:grid-cols-12", "3xl:grid-cols-18")

/**
 *
 * ~160 px (9rem, ~16ch) / col
 * 8 = 8x1, 4x2, 2x4
 * xl: 1280/160 = 8
 * lg: 1024/160 = 6.4
 * md: 768/160 = 4.8
 * sm: 640/160 = 4
 * xs: 400/160 = 2.5
 */
export const classesGridCols8xl = classArr(
  "grid grid-cols-3",
  "sm:grid-cols-4",
  "md:grid-cols-5",
  "lg:grid-cols-6",
  "xl:grid-cols-8",
)
export const classesGridCols8xl3 = classArr(classesGridCols8xl, "2xl:grid-cols-16", "3xl:grid-cols-24")

export function classesGridColsByCharacterLength(chars: number): string {
  if (chars < 16) return classesGridCols8xl
  if (chars < 20) return classesGridCols6xl
  if (chars < 32) return classesGridCols4xl
  if (chars < 40) return classesGridCols3xl
  return classesGridCols2xl
}

export function classesGridColsByCharacterLengthMaxLgDialog(chars: number): string {
  if (chars < 20) return "grid " + "grid-cols-2 " + "sm:grid-cols-3 " + "md:grid-cols-4 " + "lg:grid-cols-5 "
  if (chars < 40) return "grid " + "grid-cols-1 " + "md:grid-cols-2 "
  return "grid " + "grid-cols-1 "
}

import type { MayHaveChildren } from "~/utils/MayHaveChildren.ts"
import type { MayHaveClass } from "~/utils/MayHaveClass"

export interface MayHaveChildrenAndClassName extends MayHaveChildren, MayHaveClass {}

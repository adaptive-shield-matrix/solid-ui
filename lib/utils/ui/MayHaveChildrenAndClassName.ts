import type { MayHaveChildren } from "~/utils/MayHaveChildren.ts"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"

export interface MayHaveChildrenAndClassName extends MayHaveChildren, MayHaveClass {}

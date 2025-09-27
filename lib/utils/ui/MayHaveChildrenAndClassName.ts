import type { MayHaveChildren } from "~/utils/ui/MayHaveChildren.ts"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"

export interface MayHaveChildrenAndClassName extends MayHaveChildren, MayHaveClass {}

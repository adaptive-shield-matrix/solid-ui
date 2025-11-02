import type { DemoListType } from "~ui/generate_demo_list/DemoListType"

export interface DemoNavDataProps {
  category?: string
  compName?: string
  demoList: DemoListType
  demoPrefix: string
}

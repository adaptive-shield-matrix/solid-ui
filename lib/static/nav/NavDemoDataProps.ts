import type { DemoListType } from "~ui/generate_demo_list/DemoListType"

export interface NavDemoDataProps {
  category?: string
  compName?: string
  demoList: DemoListType
  demoPrefix: string
}

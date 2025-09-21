import { lazy } from "solid-js"
import { type DemoListType } from "~/generate_demo_list/DemoListType.ts"

const DemoTable2R = lazy(async () => {
  const c = await import("@/demos/table/DemoTable2R.tsx")
  return { default: c.DemoTable2R }
})

const DemoTable1R = lazy(async () => {
  const c = await import("@/demos/table/DemoTable1R.tsx")
  return { default: c.DemoTable1R }
})

const DemoTablePagination = lazy(async () => {
  const c = await import("@/demos/table/DemoTablePagination.tsx")
  return { default: c.DemoTablePagination }
})

const DemoSolidComparingForVsIndex = lazy(async () => {
  const c = await import("@/demos/learning_solid/iteration/DemoSolidComparingForVsIndex.tsx")
  return { default: c.DemoSolidComparingForVsIndex }
})

const DemoSolidDerivedSignals = lazy(async () => {
  const c = await import("@/demos/learning_solid/iteration/DemoSolidDerivedSignals.tsx")
  return { default: c.DemoSolidDerivedSignals }
})

const DemoAsync1 = lazy(async () => {
  const c = await import("@/demos/learning_solid/async/DemoAsync1.tsx")
  return { default: c.DemoAsync1 }
})

const DemoSolidTodoApp = lazy(async () => {
  const c = await import("@/demos/learning_solid/todo/DemoSolidTodoApp.tsx")
  return { default: c.DemoSolidTodoApp }
})

const DemoSolidTodoApp2Store = lazy(async () => {
  const c = await import("@/demos/learning_solid/todo/DemoSolidTodoApp2Store.tsx")
  return { default: c.DemoSolidTodoApp2Store }
})

const DemoSolidGlobalResourceApp = lazy(async () => {
  const c = await import("@/demos/learning_solid/global_resource/DemoSolidGlobalResourceApp.tsx")
  return { default: c.DemoSolidGlobalResourceApp }
})

const DemoUseSubmission2 = lazy(async () => {
  const c = await import("@/demos/learning_solid/use_submission/DemoUseSubmission2.tsx")
  return { default: c.DemoUseSubmission2 }
})

const DemoUseSubmission1 = lazy(async () => {
  const c = await import("@/demos/learning_solid/use_submission/DemoUseSubmission1.tsx")
  return { default: c.DemoUseSubmission1 }
})

export const demoList = {
  learning_solid: {
    DemoSolidComparingForVsIndex: DemoSolidComparingForVsIndex,
    DemoSolidDerivedSignals: DemoSolidDerivedSignals,
    DemoAsync1: DemoAsync1,
    DemoSolidTodoApp: DemoSolidTodoApp,
    DemoSolidTodoApp2Store: DemoSolidTodoApp2Store,
    DemoSolidGlobalResourceApp: DemoSolidGlobalResourceApp,
    DemoUseSubmission2: DemoUseSubmission2,
    DemoUseSubmission1: DemoUseSubmission1,
  },
  table: {
    DemoTable2R: DemoTable2R,
    DemoTable1R: DemoTable1R,
    DemoTablePagination: DemoTablePagination,
  },
} as const satisfies DemoListType

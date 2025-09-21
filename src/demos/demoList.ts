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

const DemoRadioSwitch = lazy(async () => {
  const c = await import("@/demos/input/DemoRadioSwitch.tsx")
  return { default: c.DemoRadioSwitch }
})

const DemoMultiSelect = lazy(async () => {
  const c = await import("@/demos/input/DemoMultiSelect.tsx")
  return { default: c.DemoMultiSelect }
})

const DemoNumberInput = lazy(async () => {
  const c = await import("@/demos/input/DemoNumberInput.tsx")
  return { default: c.DemoNumberInput }
})

const DemoNativeSingleSelect = lazy(async () => {
  const c = await import("@/demos/input/DemoNativeSingleSelect.tsx")
  return { default: c.DemoNativeSingleSelect }
})

const DemoForm1 = lazy(async () => {
  const c = await import("@/demos/input/DemoForm1.tsx")
  return { default: c.DemoForm1 }
})

const DemoLoaders = lazy(async () => {
  const c = await import("@/demos/static/DemoLoaders.tsx")
  return { default: c.DemoLoaders }
})

const DemoTimeline = lazy(async () => {
  const c = await import("@/demos/static/DemoTimeline.tsx")
  return { default: c.DemoTimeline }
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

const DemoToaster = lazy(async () => {
  const c = await import("@/demos/interactive/DemoToaster.tsx")
  return { default: c.DemoToaster }
})

const DemoNativeDialog = lazy(async () => {
  const c = await import("@/demos/interactive/DemoNativeDialog.tsx")
  return { default: c.DemoNativeDialog }
})

const DemoDetails = lazy(async () => {
  const c = await import("@/demos/interactive/DemoDetails.tsx")
  return { default: c.DemoDetails }
})

const DemoNativePopover = lazy(async () => {
  const c = await import("@/demos/interactive/DemoNativePopover.tsx")
  return { default: c.DemoNativePopover }
})

const DemoNativePopoverFloating = lazy(async () => {
  const c = await import("@/demos/interactive/DemoNativePopoverFloating.tsx")
  return { default: c.DemoNativePopoverFloating }
})

const DemoButtons = lazy(async () => {
  const c = await import("@/demos/interactive/DemoButtons.tsx")
  return { default: c.DemoButtons }
})

const DemoPopover = lazy(async () => {
  const c = await import("@/demos/interactive/DemoPopover.tsx")
  return { default: c.DemoPopover }
})

export const demoList = {
  input: {
    DemoRadioSwitch: DemoRadioSwitch,
    DemoMultiSelect: DemoMultiSelect,
    DemoNumberInput: DemoNumberInput,
    DemoNativeSingleSelect: DemoNativeSingleSelect,
    DemoForm1: DemoForm1,
  },
  interactive: {
    DemoToaster: DemoToaster,
    DemoNativeDialog: DemoNativeDialog,
    DemoDetails: DemoDetails,
    DemoNativePopover: DemoNativePopover,
    DemoNativePopoverFloating: DemoNativePopoverFloating,
    DemoButtons: DemoButtons,
    DemoPopover: DemoPopover,
  },
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
  static: {
    DemoLoaders: DemoLoaders,
    DemoTimeline: DemoTimeline,
  },
  table: {
    DemoTable2R: DemoTable2R,
    DemoTable1R: DemoTable1R,
    DemoTablePagination: DemoTablePagination,
  },
} as const satisfies DemoListType

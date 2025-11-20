import { lazy } from "solid-js"
import { type DemoListType } from "~ui/generate_demo_list/DemoListType"

const DemoTablePagination2 = lazy(async () => {
  const c = await import("@/demos/table/DemoTablePagination2")
  return { default: c.DemoTablePagination2 }
})

const DemoTable2R = lazy(async () => {
  const c = await import("@/demos/table/DemoTable2R")
  return { default: c.DemoTable2R }
})

const DemoTable1R = lazy(async () => {
  const c = await import("@/demos/table/DemoTable1R")
  return { default: c.DemoTable1R }
})

const DemoTablePagination = lazy(async () => {
  const c = await import("@/demos/table/DemoTablePagination")
  return { default: c.DemoTablePagination }
})

const DemoCheckSingle = lazy(async () => {
  const c = await import("@/demos/input/DemoCheckSingle")
  return { default: c.DemoCheckSingle }
})

const DemoSwitchSingle = lazy(async () => {
  const c = await import("@/demos/input/DemoSwitchSingle")
  return { default: c.DemoSwitchSingle }
})

const DemoCheckBoolean = lazy(async () => {
  const c = await import("@/demos/input/DemoCheckBoolean")
  return { default: c.DemoCheckBoolean }
})

const DemoInputS = lazy(async () => {
  const c = await import("@/demos/input/DemoInputS")
  return { default: c.DemoInputS }
})

const DemoNumberInput = lazy(async () => {
  const c = await import("@/demos/input/DemoNumberInput")
  return { default: c.DemoNumberInput }
})

const DemoSelectSingleNative = lazy(async () => {
  const c = await import("@/demos/input/DemoSelectSingleNative")
  return { default: c.DemoSelectSingleNative }
})

const DemoCheckMultiple = lazy(async () => {
  const c = await import("@/demos/input/DemoCheckMultiple")
  return { default: c.DemoCheckMultiple }
})

const DemoCheckbox = lazy(async () => {
  const c = await import("@/demos/input/DemoCheckbox")
  return { default: c.DemoCheckbox }
})

const DemoSelectMultiple = lazy(async () => {
  const c = await import("@/demos/input/DemoSelectMultiple")
  return { default: c.DemoSelectMultiple }
})

const DemoIcons = lazy(async () => {
  const c = await import("@/demos/static/DemoIcons")
  return { default: c.DemoIcons }
})

const DemoBadge = lazy(async () => {
  const c = await import("@/demos/static/DemoBadge")
  return { default: c.DemoBadge }
})

const DemoSeparators = lazy(async () => {
  const c = await import("@/demos/static/DemoSeparators")
  return { default: c.DemoSeparators }
})

const DemoLoaders = lazy(async () => {
  const c = await import("@/demos/static/DemoLoaders")
  return { default: c.DemoLoaders }
})

const DemoTimeline = lazy(async () => {
  const c = await import("@/demos/static/DemoTimeline")
  return { default: c.DemoTimeline }
})

const DemoBadges = lazy(async () => {
  const c = await import("@/demos/static/DemoBadges")
  return { default: c.DemoBadges }
})

const DemoSolidComparingForVsIndex = lazy(async () => {
  const c = await import("@/demos/learning_solid/iteration/DemoSolidComparingForVsIndex")
  return { default: c.DemoSolidComparingForVsIndex }
})

const DemoSolidDerivedSignals = lazy(async () => {
  const c = await import("@/demos/learning_solid/iteration/DemoSolidDerivedSignals")
  return { default: c.DemoSolidDerivedSignals }
})

const DemoAsync1 = lazy(async () => {
  const c = await import("@/demos/learning_solid/async/DemoAsync1")
  return { default: c.DemoAsync1 }
})

const DemoSolidTodoApp = lazy(async () => {
  const c = await import("@/demos/learning_solid/todo/DemoSolidTodoApp")
  return { default: c.DemoSolidTodoApp }
})

const DemoSolidTodoApp2Store = lazy(async () => {
  const c = await import("@/demos/learning_solid/todo/DemoSolidTodoApp2Store")
  return { default: c.DemoSolidTodoApp2Store }
})

const DemoSolidGlobalResourceApp = lazy(async () => {
  const c = await import("@/demos/learning_solid/global_resource/DemoSolidGlobalResourceApp")
  return { default: c.DemoSolidGlobalResourceApp }
})

const DemoUseSubmission2 = lazy(async () => {
  const c = await import("@/demos/learning_solid/use_submission/DemoUseSubmission2")
  return { default: c.DemoUseSubmission2 }
})

const DemoUseSubmission1 = lazy(async () => {
  const c = await import("@/demos/learning_solid/use_submission/DemoUseSubmission1")
  return { default: c.DemoUseSubmission1 }
})

const DemoToaster = lazy(async () => {
  const c = await import("@/demos/interactive/DemoToaster")
  return { default: c.DemoToaster }
})

const DemoTabs = lazy(async () => {
  const c = await import("@/demos/interactive/DemoTabs")
  return { default: c.DemoTabs }
})

const DemoLinks = lazy(async () => {
  const c = await import("@/demos/interactive/DemoLinks")
  return { default: c.DemoLinks }
})

const DemoToggle = lazy(async () => {
  const c = await import("@/demos/interactive/DemoToggle")
  return { default: c.DemoToggle }
})

const DemoTheme = lazy(async () => {
  const c = await import("@/demos/interactive/DemoTheme")
  return { default: c.DemoTheme }
})

const DemoDetails = lazy(async () => {
  const c = await import("@/demos/interactive/DemoDetails")
  return { default: c.DemoDetails }
})

const DemoDialog = lazy(async () => {
  const c = await import("@/demos/interactive/DemoDialog")
  return { default: c.DemoDialog }
})

const DemoButtons = lazy(async () => {
  const c = await import("@/demos/interactive/DemoButtons")
  return { default: c.DemoButtons }
})

const DemoPopover = lazy(async () => {
  const c = await import("@/demos/interactive/DemoPopover")
  return { default: c.DemoPopover }
})

const DemoLists = lazy(async () => {
  const c = await import("@/demos/interactive/DemoLists")
  return { default: c.DemoLists }
})

export const demoList = {
  input: {
    DemoCheckSingle: DemoCheckSingle,
    DemoSwitchSingle: DemoSwitchSingle,
    DemoCheckBoolean: DemoCheckBoolean,
    DemoInputS: DemoInputS,
    DemoNumberInput: DemoNumberInput,
    DemoSelectSingleNative: DemoSelectSingleNative,
    DemoCheckMultiple: DemoCheckMultiple,
    DemoCheckbox: DemoCheckbox,
    DemoSelectMultiple: DemoSelectMultiple,
  },
  interactive: {
    DemoToaster: DemoToaster,
    DemoTabs: DemoTabs,
    DemoLinks: DemoLinks,
    DemoToggle: DemoToggle,
    DemoTheme: DemoTheme,
    DemoDetails: DemoDetails,
    DemoDialog: DemoDialog,
    DemoButtons: DemoButtons,
    DemoPopover: DemoPopover,
    DemoLists: DemoLists,
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
    DemoIcons: DemoIcons,
    DemoBadge: DemoBadge,
    DemoSeparators: DemoSeparators,
    DemoLoaders: DemoLoaders,
    DemoTimeline: DemoTimeline,
    DemoBadges: DemoBadges,
  },
  table: {
    DemoTablePagination2: DemoTablePagination2,
    DemoTable2R: DemoTable2R,
    DemoTable1R: DemoTable1R,
    DemoTablePagination: DemoTablePagination,
  },
} as const satisfies DemoListType

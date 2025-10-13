export function transformDemoListToRecord(given: Record<string, string[]>): Record<string, Record<string, string>> {
  const result: Record<string, Record<string, string>> = {}

  for (const [key, filePaths] of Object.entries(given)) {
    const componentMap: Record<string, string> = {}

    for (const filePath of filePaths) {
      // Extract the filename from the path
      const filename = filePath.split("/").pop()
      if (!filename) continue

      // Remove the .tsx extension
      const componentName = filename.replace("", "")

      // Map the component name to itself
      componentMap[componentName] = componentName
    }

    result[key] = componentMap
  }

  return result
}

/*
implement transformDemoListToRecord
so that a given = { ui_input [ "./src/ui/input/DemosUiInput", "src/ui/input/select/DemoMultiSelect"]}

will be returned as

{
  ui_input: {
    DemosUiInput: "DemosUiInput",
    DemoMultiSelect: "DemoMultiSelect",
  }
}
*/

import { readdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { formatGeneratedCodeFile } from "~/generate_demo_list/parts/formatGeneratedCodeFile"
import { objectKeys } from "~/utils/obj/objectKeys"
import { findDemoFilesRecursive } from "./parts/findDemoFilesRecursive"
import { removeDemoObjectValueQuotes } from "./parts/removeDemoObjectValueQuotes"
import { serializeDemoComponentImport } from "./parts/serializeDemoComponentImport"
import { sortDemoObjectKeys } from "./parts/sortDemoObjectKeys"
import { transformDemoListToRecord } from "./parts/transformDemoListToRecord"

type DemoPageListType = Record<string, string[]>

export async function generateDemoList(demoSearchDirRelative: string, outputFileRelative: string) {
  // const found = findDemoFilesRecursive("src")
  const demoPageList: DemoPageListType = {}
  const baseDir = process.cwd()
  const demoSearchDirAbsolute = join(baseDir, demoSearchDirRelative)
  const categories = await readdir(demoSearchDirAbsolute, { withFileTypes: true })
  for (const category of categories) {
    if (!category.isDirectory()) {
      continue
    }
    const searchDir = join(baseDir, demoSearchDirRelative, category.name)
    const found = await findDemoFilesRecursive(searchDir)
    if (found.length <= 0) continue
    demoPageList[category.name] = found
  }

  let output = `
import { lazy } from "solid-js"
import { type DemoListType } from "~/generate_demo_list/DemoListType.ts"\n\n`

  for (const category of objectKeys(demoPageList)) {
    const importPathComponents = demoPageList[category]
    console.log(category, importPathComponents)
    if (!importPathComponents) continue
    for (const importPathComponent of importPathComponents) {
      console.log(importPathComponent)
      output += serializeDemoComponentImport(importPathComponent, baseDir)
    }
  }

  // console.log(output)

  const record = transformDemoListToRecord(demoPageList)
  const sorted = sortDemoObjectKeys(record)
  const recordSerialized = removeDemoObjectValueQuotes(JSON.stringify(sorted, null, 2))
  const recordContent = `\n\nexport const demoList = ${recordSerialized} as const satisfies DemoListType;`
  output += recordContent

  await writeFile(outputFileRelative, output, "utf-8")
  await formatGeneratedCodeFile(outputFileRelative)
}

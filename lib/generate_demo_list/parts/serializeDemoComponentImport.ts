import { join } from "node:path"

export function serializeDemoComponentImport(path: string, baseDir: string) {
  const name = path.split("/").at(-1)?.replace("", "")

  const replacements = [
    [join(baseDir, "src"), "@"],
    [join(baseDir, "lib"), "~"],
  ] as const

  let importPath = path
  for (const [search, replace] of replacements) {
    importPath = importPath.replaceAll(search, replace)
  }
  // console.log("import:", path, "->", importPath)

  return `
  const ${name} = lazy(async () => {
    const c = await import("${importPath}")
    return { default: c.${name} }
  })
  `
}

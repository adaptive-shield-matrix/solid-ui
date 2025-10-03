// generate-jsr-exports.ts
import fs from 'fs/promises'
import path from 'path'

async function findTsFiles(dir: string): Promise<{relPath: string, sourcePath: string}[]> {
  const files: {relPath: string, sourcePath: string}[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('generate_') || entry.name === 'demo_pages' || entry.name === 'bun' || entry.name === 'generate_demo_list' || entry.name === 'generate_ai_rules') {
        continue;
      }
      const subFiles = await findTsFiles(fullPath);
      for (const sub of subFiles) {
        const subRel = path.relative(process.cwd(), sub.sourcePath);
        const relPath = path.relative('lib', subRel).replace(/\.(ts|tsx)$/, '');
        if (relPath) {
          files.push({relPath, sourcePath: `./lib/${relPath}.tsx`}); // assume .tsx, adjust if needed
        }
      }
    } else if (
      (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) &&
      !entry.name.match(/\.test\./)
    ) {
      const relPathFull = path.relative('lib', fullPath);
      const relPath = relPathFull.replace(/\.(ts|tsx)$/, '');
      if (relPath) {
        const ext = relPathFull.endsWith('.tsx') ? '.tsx' : '.ts';
        files.push({
          relPath,
          sourcePath: `./lib/${relPath}${ext}`
        });
      }
    }
  }
  return files;
}

async function main() {
  const libDir = path.resolve('lib');
  const tsFiles = await findTsFiles(libDir);
  const exportsObj: Record<string, string> = {};
  for (const file of tsFiles) {
    exportsObj[`./${file.relPath}`] = file.sourcePath;
  }

  const packageJsonPath = path.resolve('package.json');
  const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8');
  const pkg = JSON.parse(packageJsonContent);

  const jsrContent = {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    license: pkg.license,
    keywords: pkg.keywords,
    homepage: pkg.homepage,
    repository: pkg.repository,
    exports: exportsObj
  };

  await fs.writeFile('jsr.json', JSON.stringify(jsrContent, null, 2) + '\n', 'utf8');
  console.log(`Updated jsr.json. Exported ${tsFiles.length} modules.`);
}

main().catch(console.error);
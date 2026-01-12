import { CardWrapper } from "~ui/static/container/CardWrapper"
import { stylesBgCube } from "~ui/static/styles/stylesBgCube"
import { stylesBgDotted } from "~ui/static/styles/stylesBgDotted"
import { stylesBgGrid } from "~ui/static/styles/stylesBgGrid"
import { stylesBgGridBlueprint } from "~ui/static/styles/stylesBgGridBlueprint"
import { stylesBgLeaf } from "~ui/static/styles/stylesBgLeaf"
import { stylesBgSlash } from "~ui/static/styles/stylesBgSlash"
import { stylesBgSlashSparse } from "~ui/static/styles/stylesBgSlashSparse"
import { stylesBgSquareZig } from "~ui/static/styles/stylesBgSquareZig"
import { stylesBgWave } from "~ui/static/styles/stylesBgWave"
import { classArr } from "~ui/utils/classArr"

const styles = [
  { name: "Dotted", bgStyles: stylesBgDotted, description: "Subtle dot pattern for a clean, minimal look." },
  { name: "Grid", bgStyles: stylesBgGrid, description: "Graph paper style grid pattern." },
  { name: "Slash", bgStyles: stylesBgSlash, description: "Diagonal slash pattern for texture." },
  {
    name: "Slash Sparse",
    bgStyles: stylesBgSlashSparse,
    description: "Sparse diagonal slash pattern with more spacing.",
  },
  { name: "Cube", bgStyles: stylesBgCube, description: "Japanese pattern with interlocking cube shapes." },
  { name: "Wave", bgStyles: stylesBgWave, description: "Smooth wave pattern for a flowing feel." },
  { name: "Leaf", bgStyles: stylesBgLeaf, description: "Organic leaf-inspired pattern." },
  {
    name: "Grid Blueprint",
    bgStyles: stylesBgGridBlueprint,
    description: "Blueprint-style grid with major and minor lines.",
  },
  { name: "Square Zigzag", bgStyles: stylesBgSquareZig, description: "Zigzag square pattern." },
]

export function DemoStyles() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold text-center my-6">Background Styles Demo</h1>
      <div class="space-y-8">
        {styles.map((style) => (
          <section
            id={style.name.toLowerCase().replace(/\s+/g, "-")}
            class={classArr("max-w-screen-xl mx-auto", "min-h-64", "flex flex-col items-center justify-center py-8")}
            style={style.bgStyles}
          >
            <h2 class="text-4xl font-bold mb-4">{style.name}</h2>
            <CardWrapper class="max-w-md text-center p-6">
              <p class="text-gray-600 dark:text-gray-300">{style.description}</p>
              <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Sample text to test readability on this background pattern.
              </p>
            </CardWrapper>
          </section>
        ))}
      </div>
    </div>
  )
}

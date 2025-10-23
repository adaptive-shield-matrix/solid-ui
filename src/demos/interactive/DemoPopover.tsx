import { mdiDotsVertical } from "@mdi/js"
import { buttonVariant } from "~ui/interactive/button/buttonCva.ts"
import { CorvuPopover } from "~ui/interactive/popover/CorvuPopover"
import { classesGridCols3xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/ui/classArr"
import type { HasClass } from "~ui/utils/ui/HasClass"

export function DemoPopover() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Popover Demo</h1>
      <div class={classArr(classesGridCols3xl, "gap-4")}>
        <BasicPopoverDemo title="Start" class="justify-start items-start" />
        <BasicPopoverDemo title="Center" class="justify-center items-center" />
        <BasicPopoverDemo title="End" class="justify-end items-end" />
      </div>
    </div>
  )
}

interface BasicPopoverDemo extends HasClass {
  title: string
}

function BasicPopoverDemo(p: BasicPopoverDemo) {
  return (
    <div class={classArr("flex flex-col", p.class)}>
      <h2 class="text-2xl font-bold mb-4">{p.title + " Popover"}</h2>
      <CorvuPopover icon={mdiDotsVertical} variant={buttonVariant.outline} buttonChildren={"Open"}>
        <Content />
      </CorvuPopover>
    </div>
  )
}

function Content() {
  return (
    <div class="p-4 min-w-48">
      <p class="text-sm">This is a simple popover content.</p>
      <p class="text-sm mt-2">It appears when you click the button.</p>
    </div>
  )
}

import { mdiAccount, mdiCog, mdiHeart, mdiHome, mdiStar } from "@mdi/js"
import { Icon0 } from "~ui/static/icon/Icon0"
import { Icon1 } from "~ui/static/icon/Icon1"
import { SvgIconGoogle as IconGoogle } from "~ui/static/icon/IconGoogle"

export function DemoIcons() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Icons Demo</h1>
      <div class="space-y-8">
        <Icon0Demo />
        <Icon1Demo />
        <IconGoogleDemo />
        <IconsWithTitlesDemo />
        <IconsWithCustomClassesDemo />
      </div>
    </div>
  )
}

function Icon0Demo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icon0 Component</h2>
      <div class="flex gap-4">
        <Icon0 path={mdiHome} />
        <Icon0 path={mdiHeart} />
        <Icon0 path={mdiStar} />
        <Icon0 path={mdiCog} />
      </div>
    </div>
  )
}

function Icon1Demo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icon1 Component</h2>
      <div class="flex gap-4">
        <Icon1 path={mdiHome} />
        <Icon1 path={mdiHeart} />
        <Icon1 path={mdiStar} />
        <Icon1 path={mdiCog} />
      </div>
    </div>
  )
}

function IconGoogleDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Google Icon</h2>
      <div class="flex gap-4">
        <IconGoogle />
        <span class="text-sm text-muted-foreground">Google logo icon</span>
      </div>
    </div>
  )
}

function IconsWithTitlesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icons with Titles (Accessible)</h2>
      <div class="flex gap-4">
        <Icon0 path={mdiHome} title="Home" />
        <Icon1 path={mdiAccount} title="User Account" />
        <Icon0 path={mdiCog} title="Settings" />
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        Icons with titles are accessible to screen readers.
      </p>
    </div>
  )
}

function IconsWithCustomClassesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icons with Custom Classes</h2>
      <div class="flex gap-4">
        <Icon1 path={mdiHeart} class="text-red-500 w-8 h-8" />
        <Icon1 path={mdiStar} class="text-yellow-500 w-6 h-6" />
        <Icon0 path={mdiCog} class="text-blue-500 w-10 h-10" />
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        Icons can be styled with custom colors and sizes.
      </p>
    </div>
  )
}

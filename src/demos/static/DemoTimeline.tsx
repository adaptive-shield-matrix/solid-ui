import { mdiBrain, mdiCodeTags, mdiPencilRuler, mdiRocketLaunch, mdiTestTube } from "@mdi/js"
import type { JSXElement } from "solid-js"
import { Icon1 } from "~/static/img/Icon1"
import { Timeline } from "~/static/timeline/Timeline"

export function DemoTimeline() {
  const items: {
    title: JSXElement
    description?: JSXElement
    bullet?: JSXElement
  }[] = [
    {
      title: "Planning",
      description: "Define project goals and scope",
      bullet: <Icon1 path={mdiBrain} class="h-4 w-4" />,
    },
    {
      title: "Design",
      description: "Create wireframes and mockups",
      bullet: <Icon1 path={mdiPencilRuler} class="h-4 w-4" />,
    },
    {
      title: "Development",
      description: "Implement features and functionality",
      bullet: <Icon1 path={mdiCodeTags} class="h-4 w-4" />,
    },
    {
      title: "Testing",
      description: "Ensure quality and fix issues",
      bullet: <Icon1 path={mdiTestTube} class="h-4 w-4" />,
    },
    {
      title: "Deployment",
      description: "Launch the product",
      bullet: <Icon1 path={mdiRocketLaunch} class="h-4 w-4" />,
    },
  ]

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl font-bold">Timeline Demo</h1>
        <p class="text-muted-foreground">A vertical timeline component with active states.</p>
      </div>
      <Timeline items={items} activeItem={2} bulletSize={20} lineSize={3} />
    </div>
  )
}

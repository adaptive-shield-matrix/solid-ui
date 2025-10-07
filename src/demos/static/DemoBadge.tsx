import { Badge } from "~/static/badge/Badge.tsx"
import { badgeVariant } from "~/static/badge/badgeCva.tsx"

export function DemoBadge() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Badge Demo</h1>
      <div class="space-y-8">
        <BasicBadgesDemo />
        <BadgeVariantsDemo />
        <BadgesInContextDemo />
      </div>
    </div>
  )
}

function BasicBadgesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Badges</h2>
      <div class="flex flex-wrap gap-4">
        <Badge>Default</Badge>
        <Badge variant={badgeVariant.primary}>Primary</Badge>
        <Badge variant={badgeVariant.secondary}>Secondary</Badge>
        <Badge variant={badgeVariant.success}>Success</Badge>
      </div>
    </div>
  )
}

function BadgeVariantsDemo() {
  const variants = Object.values(badgeVariant)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Badge Variants</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {variants.map(variant => (
          <Badge variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function BadgesInContextDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Badges in Context</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Status:</span>
          <Badge variant={badgeVariant.success}>Active</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Priority:</span>
          <Badge variant={badgeVariant.warning}>High</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Version:</span>
          <Badge variant={badgeVariant.info}>v2.1.0</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Notification:</span>
          <Badge variant={badgeVariant.error}>3</Badge>
        </div>
      </div>
    </div>
  )
}
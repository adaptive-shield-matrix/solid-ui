import { Badge } from "~ui/static/badge/Badge.tsx"
import { type BadgeVariant, badgeVariant } from "~ui/static/badge/badgeCva.tsx"

export function DemoBadges() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Badge Demo</h1>
      <div class="space-y-8">
        <BadgeVariantsDemo />
        <BadgeSizesDemo />
        <BadgeInContextDemo />
      </div>
    </div>
  )
}

function BadgeVariantsDemo() {
  const variants = Object.values(badgeVariant)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Badge Variants</h2>
      <div class="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Badge variant={variant as BadgeVariant}>
            {variant}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function BadgeSizesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Badge Sizes (with custom classes)</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <Badge class="text-xs px-2 py-1">Small Badge</Badge>
        <Badge class="text-sm px-2.5 py-0.5">Default Badge</Badge>
        <Badge class="text-base px-3 py-1">Large Badge</Badge>
        <Badge class="text-lg px-4 py-1.5">Extra Large Badge</Badge>
      </div>
    </div>
  )
}

function BadgeInContextDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Badges in Context</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Email notifications</span>
          <Badge variant={badgeVariant.info}>3 unread</Badge>
        </div>

        <div class="flex items-center gap-2">
          <span>Storage used</span>
          <Badge variant={badgeVariant.warning}>85%</Badge>
        </div>

        <div class="flex items-center gap-2">
          <span>System status</span>
          <Badge variant={badgeVariant.success}>Online</Badge>
        </div>

        <div class="flex items-center gap-2">
          <span>Failed requests</span>
          <Badge variant={badgeVariant.error}>2 errors</Badge>
        </div>

        <div class="flex items-center gap-2">
          <span>Premium feature</span>
          <Badge variant={badgeVariant.primary}>Pro</Badge>
        </div>

        <div class="flex items-center gap-2">
          <span>Draft status</span>
          <Badge variant={badgeVariant.subtle}>Draft</Badge>
        </div>

        <div class="flex items-center gap-2">
          <span>Version</span>
          <Badge variant={badgeVariant.outline}>v2.1.0</Badge>
        </div>
      </div>
    </div>
  )
}

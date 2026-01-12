import { CardWrapper } from "~ui/static/container/CardWrapper"

export function DemoCard() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Card Demo</h1>
      <div class="space-y-4">
        <CardWrapper class="p-4">
          <p class="mb-2">Basic card with default padding</p>
          <p class="text-muted-foreground text-sm">This card uses classesCardWrapperP4 for consistent styling.</p>
        </CardWrapper>
        <CardWrapper class="p-6">
          <p class="mb-2">Card with larger padding</p>
          <p class="text-muted-foreground text-sm">Cards support custom classes for additional styling.</p>
        </CardWrapper>
        <CardWrapper id="demo-card" class="p-4">
          <p>Card with id attribute for anchor links</p>
        </CardWrapper>
      </div>
    </div>
  )
}

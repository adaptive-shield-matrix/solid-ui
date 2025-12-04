import { createSignal } from "solid-js"
import { InputDatalist } from "~ui/input/input/InputDatalist"
import { PageWrapper } from "~ui/static/page/PageWrapper"

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "blueberry",
  "watermelon",
  "pineapple",
  "mango",
  "kiwi",
]

const fruitEmojis: Record<string, string> = {
  apple: "🍎",
  banana: "🍌",
  orange: "🍊",
  grape: "🍇",
  strawberry: "🍓",
  blueberry: "🫐",
  watermelon: "🍉",
  pineapple: "🍍",
  mango: "🥭",
  kiwi: "🥝",
}

export function DemoInputDatalist() {
  return (
    <PageWrapper>
      <div class="space-y-8">
        <BasicFruitsDatalist />
        <CustomFruitEmojiDatalist />
      </div>
    </PageWrapper>
  )
}

function BasicFruitsDatalist() {
  const [basicFruitValue, setBasicFruitValue] = createSignal("")

  return (
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Basic Fruits Datalist</h3>
      <InputDatalist
        getOptions={getFruitOptions}
        placeholder="Select a fruit..."
        value={basicFruitValue()}
        onInput={(e) => setBasicFruitValue(e.currentTarget.value)}
      />
      <p class="text-sm text-muted-foreground">Selected: {basicFruitValue() || "None"}</p>
    </div>
  )
}

function CustomFruitEmojiDatalist() {
  const [customFruitValue, setCustomFruitValue] = createSignal("")

  return (
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Custom Display with Emojis</h3>
      <InputDatalist
        getOptions={getFruitOptions}
        optionDisplayText={getFruitWithEmoji}
        placeholder="Select a fruit with emoji..."
        value={customFruitValue()}
        onInput={(e) => setCustomFruitValue(e.currentTarget.value)}
      />
      <p class="text-sm text-muted-foreground">Selected: {customFruitValue() || "None"}</p>
    </div>
  )
}

function getFruitOptions(): string[] {
  return fruits
}

function getFruitWithEmoji(fruit: string): string {
  return `${fruitEmojis[fruit] || "🍓"} ${fruit}`
}

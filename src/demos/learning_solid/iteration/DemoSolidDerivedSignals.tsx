import { createMemo, createSignal, For } from "solid-js"

const ITEMS1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ITEMS2 = [11, 22, 33, 44, 55, 66, 77, 88, 99]

export function DemoSolidDerivedSignals() {
  // passed via context, can't know when changes
  const [inputItems, setInputItems] = createSignal(ITEMS1)

  const SHOW_PER_PAGE = 3
  const [showLastX, setShowLastX] = createSignal(SHOW_PER_PAGE)

  const allItems = createMemo(() => {
    // XXX: reset showLastX when we recalculate input items
    // XXX: but docs say "The memo function should not change other signals by calling setters"
    setShowLastX(SHOW_PER_PAGE)

    return inputItems().map((v) => v + 1) // doing complex calculation with input items
  })

  const items = createMemo(() => allItems().slice(0, showLastX()))

  return (
    <div>
      <ul>
        <For each={items()}>{(item) => <li>{item}</li>}</For>
      </ul>
      <button type="button" onClick={() => setShowLastX(SHOW_PER_PAGE)}>
        reset page
      </button>
      {" "}
      <button
        type="button"
        onClick={() => {
          setShowLastX(showLastX() + SHOW_PER_PAGE)
        }}
      >
        more items
      </button>
      {" "}
      <button type="button" onClick={() => setInputItems(ITEMS2)}>
        change input items
      </button>
    </div>
  )
}

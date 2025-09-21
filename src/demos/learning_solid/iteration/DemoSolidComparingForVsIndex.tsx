import { createSignal, For, Index } from "solid-js"

export function DemoSolidComparingForVsIndex() {
  return <div class={"flex justify-between"}>
    <div>
      <h2 class={"text-xl font-semibold"}>for</h2>
      <ForCats />
    </div>
    <div>
      <h2 class={"text-xl font-semibold"}>index</h2>
      <IndexCats />
    </div>
  </div>
}

function ForCats() {
  const [cats, setCats] = createSignal([
    "Keyboard Cat",
    "Maru",
    "Henri The Existential Cat"
  ])
  setTimeout(() => setCats(["Maru", "Keyboard Cat", "Keyboard Cat", "New Cat"]), 2000)
  return (
    <ul>
      <For each={cats()}>{name => {
        console.log(`For: rendered ${name} whole cat`)
        return <li>
          {name}
        </li>
      }}</For>
    </ul>
  )
}

function IndexCats() {
  const [cats, setCats] = createSignal([
    "Keyboard Cat",
    "Maru",
    "Henri The Existential Cat"
  ])
  setTimeout(() => setCats(["Maru", "Keyboard Cat", "Keyboard Cat", "New Cat"]), 2000)
  return (
    <ul>
      <Index each={cats()}>{name => {
        console.log(`Index: rendered ${name()} whole cat`)
        return <li>
          {name()}
        </li>
      }}</Index>
    </ul>
  )
}

import { InputS } from "~ui/input/input/InputS"
import { Button } from "~ui/interactive/button/Button"
import { createSignalObject } from "~ui/utils/createSignalObject"

export function DemoForm1() {
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <form onSubmit={onSubmit} class={"flex flex-col gap-2 max-w-sm"}>
      <label for={"form-id"} class={"grid w-full max-w-sm items-center gap-1.5"}>
        <span>Id</span>
        <InputS type={"text"} id={"form-id"} placeholder={"Id"} value={formState.id.get()} valueSignal={formState.id} />
      </label>
      <label for={"name"} class={"grid w-full max-w-sm items-center gap-1.5"}>
        <span>Name</span>
        <InputS type={"text"} id={"name"} placeholder={"Name"} valueSignal={formState.name} />
      </label>
      <Button type={"submit"}>Save changes</Button>
      <Button onClick={generateRandom}>Generate random</Button>
    </form>
  )
}

function generateRandom() {
  formState.id.set(Math.random().toString(20).substring(7))
  formState.name.set(Math.random().toString(20).substring(7))
}

const formState = {
  id: createSignalObject(""),
  name: createSignalObject(""),
}

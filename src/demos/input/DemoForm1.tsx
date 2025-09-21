import { Button } from "~/interactive/button/Button.tsx"
import { createSignalObject } from "~/utils/createSignalObject.ts"

export function DemoForm1() {
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <form onSubmit={onSubmit} class={"flex flex-col gap-2 max-w-sm"}>
      <label for={"form-id"} class={"grid w-full max-w-sm items-center gap-1.5"}>
        <span>Id</span>
        <input type={"text"} id={"form-id"} placeholder={"Id"} value={formState.id.get()} onChange={formState.id.set} />
      </label>
      <label for={"name"} class={"grid w-full max-w-sm items-center gap-1.5"}>
        <span>Name</span>
        <input
          type={"text"}
          id={"name"}
          placeholder={"Name"}
          value={formState.name.get()}
          onChange={formState.name.set}
        />
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

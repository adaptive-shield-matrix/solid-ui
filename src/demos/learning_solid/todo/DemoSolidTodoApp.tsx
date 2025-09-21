import { createSignal, For } from "solid-js";
import { createLocalStore } from "~/utils/ui/createLocalStore";

//
// https://codesandbox.io/s/lrm786ojqz?file=/index.tsx:0-1806
//

type TodoItem = { title: string; done: boolean };

export function DemoSolidTodoApp() {
  const [newTitle, setTitle] = createSignal("")
  const [todos, setTodos] = createLocalStore<TodoItem[]>([], "todos")

  const addTodo = (e: SubmitEvent) => {
    e.preventDefault()
    setTodos(todos.length, {
      title: newTitle(),
      done: false
    })
    setTitle("")
  }

  return (
    <>
      <h3>Simple Todos Example</h3>
      <form onSubmit={addTodo}>
        <input
          placeholder="enter todo and click +"
          required
          value={newTitle()}
          onInput={(e) => setTitle(e.currentTarget.value)}
        />
        <button>+</button>
      </form>
      <For each={todos}>
        {(todo, i) => (
          <div>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => setTodos(i(), "done", e.currentTarget.checked)}
            />
            <input
              type="text"
              value={todo.title}
              onChange={(e) => setTodos(i(), "title", e.currentTarget.value)}
            />
            <button
              onClick={() =>
                setTodos((t) => [...t.slice(0, i()), ...t.slice(i() + 1)])
              }
            >
              x
            </button>
          </div>
        )}
      </For>
    </>
  )
}

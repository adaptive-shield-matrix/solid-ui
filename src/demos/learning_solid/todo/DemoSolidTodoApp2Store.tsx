import { batch, createEffect, createSignal, For } from "solid-js"
import { createStore } from "solid-js/store"

//
// https://playground.solidjs.com/anonymous/2e110346-efc0-4491-91f7-71aa5c294d20
//

type TodoItem = { title: string; done: boolean }

export const createTodoStore = (name: string, init: TodoItem[]) => {
  // Manage internal state
  const localState = localStorage.getItem(name)
  const [state, setState] = createStore<TodoItem[]>(localState ? JSON.parse(localState) : init)

  // Save to localStorage everytime the store is updated
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)))

  /* API implementation */

  const addTodo = (todo: TodoItem) => {
    setState(state.length, todo)
  }

  const setTitle = (index: number, title: string) => {
    setState(index, "title", title)
  }

  const setDone = (index: number, checked: boolean) => {
    setState(index, "done", checked)
  }

  const removeTodo = (index: number) => {
    const newState = [...state.slice(0, index), ...state.slice(index + 1)]
    setState(newState)
  }

  // Expose API
  return { todos: state, addTodo, setTitle, setDone, removeTodo }
}

export function DemoSolidTodoApp2Store() {
  const [newTitle, setTitle] = createSignal("")
  const todoStore = createTodoStore("todo list", [])

  const addTodo = (e: SubmitEvent) => {
    e.preventDefault()
    batch(() => {
      todoStore.addTodo({
        title: newTitle(),
        done: false,
      })
      setTitle("")
    })
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
      <For each={todoStore.todos}>
        {(todo, i) => (
          <div>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => todoStore.setDone(i(), e.currentTarget.checked)}
            />
            <input type="text" value={todo.title} onChange={(e) => todoStore.setTitle(i(), e.currentTarget.value)} />
            <button onClick={() => todoStore.removeTodo(i())}>x</button>
          </div>
        )}
      </For>
    </>
  )
}

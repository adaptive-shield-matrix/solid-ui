import { action, createAsync, query, Router, useAction, useSubmission } from "@solidjs/router"
import { Suspense, useTransition } from "solid-js"

const wait = (n = 1000) => new Promise((r) => setTimeout(r, n))

const api = {
  _count: 0,
  getCount: async () => {
    await wait()
    return api._count
  },
  setCount: async (next: number) => {
    await wait()
    if (Math.random() > 0.5) throw new Error("something failed in server")
    return (api._count = next)
  },
}

const getCount = query(api.getCount, "count")

function App() {
  const count = createAsync(() => getCount())
  const setCount = action(api.setCount)
  const submit = useAction(setCount)
  const submission = useSubmission(setCount)

  return (
    <>
      <div>transition: {useTransition()[0]() + ""}</div>
      <button
        style={{
          color: submission.pending ? "gray" : "",
        }}
        type="button"
        onClick={() => submit((count() ?? 0) + 1)}
      >
        {submission.pending ? submission.input : count()}
        {" : "}
        {count()}
      </button>
      {submission.error && (
        <button type="button" onClick={submission.retry}>
          retry: {String(submission.error)}
        </button>
      )}
    </>
  )
}

/**
 *
 * https://stackblitz.com/edit/vitejs-vite-jiumjg?file=src%2FApp.tsx
 * https://discord.com/channels/722131463138705510/1047251592610599032/threads/1243132814170394644
 *
 */
export function DemoUseSubmission2() {
  return (
    <Suspense>
      <Router root={App} />
    </Suspense>
  )
}

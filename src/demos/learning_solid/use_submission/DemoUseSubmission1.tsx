import { action, createAsync, query, Router, type Submission, useAction, useSubmissions } from "@solidjs/router"
import { createEffect, Suspense } from "solid-js"

const api = (() => {
  const DELAY_MS = 2000
  let count = 0

  return {
    getCount() {
      const local = count
      const task = (r?: (v: number) => never) => {
        console.log(`getCount${r ? " (resolve)" : ""}`, local)
        if (r) r(local)
      }
      task()
      return new Promise<number>((r) => setTimeout(task, DELAY_MS, r))
    },
    setCount(next: number) {
      const local = count
      const task = (r?: (v: number) => never) => {
        console.log(`setCount ${next} ${local} ${count} ${r ? " (resolve)" : ""}`)
        if (!r) return
        count = next
        r(count)
      }
      task()
      return new Promise<number>((r) => setTimeout(task, DELAY_MS, r))
    },
  }
})()

function selectValueToShow(
  currentCount: number | undefined,
  submissions: Array<Submission<any, any>> & { pending: boolean },
) {
  // 1. The proxy traps `pending` and returns `true` if at least one `result` on
  //    one of the submissions is `undefined`.
  //    This is why submissions from actions without a return value
  //    (i.e. which return `undefined`) are removed immediately while those with a
  //    return value can stick around for a while until they are `clear`ed.
  //    Basically when a submission exists and its `result` is `undefined` it
  //    is considered `pending`.
  // 2. Use the last action's triggered input as the optimistic value
  // 3. An action could have multiple arguments so `input` is always an array
  //    `setCount` only has one argument so we want `input[0]`
  // 4. `submissions` is a proxy, so array methods won't always work as expected
  //    despite what the type may suggest.
  //    Use submissions[$TRACK] to extract the raw array when necessary.
  return submissions.pending ? submissions[submissions.length - 1]!.input[0] : currentCount
}

const getCount = query(api.getCount, "count")

function App() {
  const count = createAsync(() => getCount())

  // An action WILL invalidate/revalidate
  // https://github.com/solidjs/solid-router/blob/e773947b85ac78281816e86621a2cdb6735ae95a/src/data/action.ts#L175-L178
  // the route's cache values
  // ESPECIALLY when `invalidateKeys` and `kays` are `undefined`
  // https://github.com/solidjs/solid-router/blob/e773947b85ac78281816e86621a2cdb6735ae95a/src/data/cache.ts#L51
  const setCount = action(api.setCount)
  const submitCount = useAction(setCount)

  // `useSubmission` (singular) may be more convenient;
  // it's wrapped in an additional proxy
  // which only accesses the very last submission
  const submissions = useSubmissions(setCount)

  createEffect(() => {
    console.table(toDisplay(submissions))
  })

  let last: number | undefined
  const increment = (current: number | undefined) => {
    if (current === undefined) return
    if (!last) last = current
    submitCount(++last)
  }

  return (
    <>
      <div class={submissions.pending ? "u-optimistic" : ""}>{selectValueToShow(count(), submissions)}</div>
      <button onClick={() => increment(count())}>Increment</button>
    </>
  )
}

/**
 *
 * https://stackblitz.com/edit/solidjs-templates-7u2yad?file=src%2Fapp.tsx
 * https://discord.com/channels/722131463138705510/1047251592610599032/threads/1243132814170394644
 *
 */
export function DemoUseSubmission1() {
  return (
    <Suspense>
      <Router root={App} />
    </Suspense>
  )
}

type SubmissionRow = {
  input: number
  pending: boolean
  result: number | undefined
}

const doClear = (clear: () => void) => clear()
const toDisplay = (submissions: Array<Submission<any, any>>) => {
  const display: Array<SubmissionRow> = []
  const clear: Array<() => void> = []
  const last = submissions.length - 1
  for (let i = 0; i < submissions.length; i += 1) {
    const s = submissions[i]
    display[i] = {
      // `input` is an array that matches the `...args` of the action
      input: s!.input[0]!,
      pending: s!.pending!,
      result: s!.result!,
    }
    if (!s!.pending && (i < last || last === 0)) clear.push(s!.clear)
  }
  clear.forEach(doClear)
  return display
}

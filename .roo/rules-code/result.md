# Result

- Use `Result` types for expected errors
- Always prefer to use Result over try-catch blocks
- If using `fetch`: always use `PromiseResult` return type, validate output with `valibot`

```ts
import { type Result } from "~utils/result/Result"

function processRequest(req: Request): Result<User> {
  const validationResult = validateRequest(req)
  if (!validationResult.success) return validationResult
}
```

Entire code of `Result` in `~utils/result/Result`

```ts
export type ResultOk<T> = { success: true; data: T }
export type ResultErr = { success: false; op: string; errorMessage: string; errorData?: string | null }
export type Result<T> = ResultOk<T> | ResultErr
export type PromiseResult<T> = Promise<Result<T>>

export function createResult<T>(data: T): ResultOk<T> {
  return {
    success: true,
    data,
  }
}

export function createError(op: string, errorMessage: string, errorData?: string | null): ResultErr {
  return createResultError(op, errorMessage, errorData)
}

export function createResultError(op: string, errorMessage: string, errorData?: string | null): ResultErr {
  const r: ResultErr = { success: false, op, errorMessage }
  if (errorData) r.errorData = errorData
  return r
}

```

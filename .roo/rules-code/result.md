# Result

- Use `Result` types for expected errors
- Always prefer to use Result over try-catch blocks
- If using `fetch`: always use `PromiseResult` return type, validate output with `valibot`

```ts
import { type Result } from "~utils/result/Result"

function processRequest(req: Request): SimpleResult<User> {
  const result = validateRequest(req)
  if (!result.success) return result

  const user = getUser(result.data.id)
  if (!result.success) return user

  return user
}
```

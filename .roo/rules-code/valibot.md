# Valibot Validation Standards

- Use `valibot` for validation
- Use predefined max length constants from `inputMaxLength.ts` for strings
- Keep validation schemas close to where they're used
- Always validate input received from apis, `fetch`, `text` (with json parsing), `localStorage`
- Add `Schema` sufix for Schema files
- never use try catches with `v.parse`, always use `v.safeParse` instead

```typescript
import { v } from "valibot"
import { inputMaxLength25, inputMaxLength50, inputMaxLength100, urlMaxLength } from "src/ui/input/input/inputMaxLength"

const userSchema = v.object({
  username: v.string([v.maxLength(inputMaxLength25)]),
  email: v.string([v.email(), v.maxLength(inputMaxLength50)]),
  bio: v.optional(v.string([v.maxLength(inputMaxLength100)])),
  website: v.optional(v.string([v.maxLength(urlMaxLength)])),
})

// Temporary exception pattern
v.string([v.maxLength(75)]) // TODO: Add inputMaxLength75 to constants
```

# Centralized definition of string literals

- Define all magic strings as const objects
- No magic strings scattered throughout the codebase
- Create derived types using `keyof typeof`
- Generate validation schemas using the const object values and `valibot` library
- Export arrays of valid values

```typescript
import { getObjectValues } from "@/utils/obj/getObjectValues"
import * as v from "valibot"

// Type
export type UserRole = keyof typeof userRole

// Values
export const userRole = {
  user: "user",
  admin: "admin",
  dev: "dev",
} as const

// Schema
export const userRoleSchema = v.enum(userRole)

// Type checking to see if schema matches type
function types1(a: v.InferOutput<typeof userRoleSchema>): UserRole {
  return a
}

// Usage
function handleLogin(provider: UserRole) {
  // Type-safe provider handling
  const user = userRole.user === provider
}
```

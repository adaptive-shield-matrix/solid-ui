# Centralized definition of string literals

- Define all magic strings as const objects instead of typescript enums
- Create derived types using `keyof typeof`
- Generate validation schemas using `v.enum` from `valibot` library

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

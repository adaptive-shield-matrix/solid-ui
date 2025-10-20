# convex

## Validator Patterns

### DRY Validator Definition

Define validators in a reusable, DRY pattern following the example in `convex/generate_image/generate_same/imageGenerationValidator.ts`:

```typescript
import { v } from "convex/values"

// Define base fields as a const object
export const someEntityValidatorFields = {
  workspaceId: v.id("workspace"),
  name: v.string(),
  // ... other fields
}

// Create base validator
export const someEntityValidator = v.object(someEntityValidatorFields)

// Create variant with token for mutations/queries
export const someEntityValidatorWithToken = v.object({ 
  ...someEntityValidatorFields, 
  token: v.string() 
})

// Export the type
export type SomeEntityValidatorType = typeof someEntityValidator.type
```

### Type-Safe ID Definitions

Use existing type-safe ID definitions like in `convex/auth/IdUser.ts`:

```typescript
import type { Id } from "../_generated/dataModel"

export type IdUser = Id<"users">
export type IdWorkspace = Id<"workspace">
// Add other ID types as needed
```

## Query/Mutation Patterns

### Function Variants

Each query/mutation/internalQuery/internalMutation should have a corresponding `Fn` function variant, following the pattern in `convex/auth/crud/findUserByEmailQuery.ts`:

```typescript
import type { QueryCtx } from "../../_generated/server"
import { internalQuery } from "../../_generated/server"
import { v } from "convex/values"

// Define the query
export const findUserByEmailQuery = internalQuery({
  args: { email: v.string() },
  handler: async (ctx, args): Promise<Doc<"users"> | null> => {
    return findUserByEmailFn(ctx, args.email)
  },
})

// Define the Fn function variant for reuse
export async function findUserByEmailFn(ctx: QueryCtx, email: string): Promise<Doc<"users"> | null> {
  return await ctx.db
    .query("users")
    .withIndex("email", (q) => q.eq("email", email))
    .unique()
}
```

### Token Validation

All mutations and queries should include a `token` parameter with validation:

```typescript
import { v } from "convex/values"
import { mutation } from "../../_generated/server"

export const someMutation = mutation({
  args: {
    // Use the validator with token
    ...someEntityValidatorWithToken.fields,
  },
  handler: async (ctx, args) => {
    // Validate token first
    const user = await validateToken(ctx, args.token)
    if (!user) {
      throw new Error("Invalid token")
    }
    
    // Proceed with mutation logic
    return someMutationFn(ctx, args, user)
  },
})

export async function someMutationFn(ctx: MutationCtx, args: SomeEntityValidatorType, user: Doc<"users">) {
  // Mutation implementation
}
```

## Data Transformation Patterns

### Database to Model Transformation

Create transformation functions to convert database documents to your application models:

```typescript
import type { UserProfile } from "@/auth/model/UserProfile"
import type { Doc } from "../../_generated/dataModel"

export function dbUsersToUserProfile(u: Doc<"users">): UserProfile {
  const { _id, _creationTime, ...rest } = u
  return { userId: _id, ...rest }
}
```

## Best Practices

1. **Always use validators** for all query/mutation arguments
2. **Include token validation** in all public-facing mutations/queries
3. **Create Fn variants** for all database operations to enable reuse
4. **Use type-safe IDs** instead of string literals
5. **Keep validators close** to where they're used
6. **Export transformation functions** for consistent data conversion
7. **Follow DRY principles** by defining base validators and extending them

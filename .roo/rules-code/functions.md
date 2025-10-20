# Function Modularization

## Overview

When refactoring code, particularly extracting functions from components, follow these guidelines to maintain clean, readable, and maintainable code structure.

- Prefer `function` over `const` for functions
- Prefer early `if(!matching) return` over `if (matching)` checks
- Prefer early `if(!matching) continue` over `if (matching)` checks in for loops
- Break large functions into smaller, focused functions
- Break functions if using try catch
- Each function should have a single responsibility
- Name functions clearly based on their purpose
- Keep functions pure when possible (no side effects)
- Avoid else statements where possible
- Do not use const arrow function to define functions
- Always separate `fetch` calls into a separate function

## General Principles

### 1. Function Placement

- **Component functions first**: Place the main component function at the top of the file, immediately after imports and type definitions.
- **Helper/utility functions last**: Move extracted helper functions to the bottom of the file, after the main component.
- **Dependency order**: Functions that depend on others should come after their dependencies.

### 2. Function Declaration Style

- **Use function declarations**: Prefer `function functionName() {}` over arrow function constants (`const functionName = () => {}`).
- **Explicit return types**: Always specify return types for functions, especially when TypeScript can infer them.
- **Clear parameter naming**: Use descriptive parameter names that indicate their purpose and types.

### 3. Function Naming

- **Descriptive names**: Functions should have names that clearly describe their purpose.
- **PascalCase for components**: Component functions should use PascalCase.
- **camelCase for utilities**: Helper/utility functions should use camelCase.

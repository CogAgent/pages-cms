# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Build**: `npm run build`
- **Lint**: `npm run lint` (Uses Next.js ESLint config)
- **Type Check**: `npm run build` (implicitly checks types via `tsc --noEmit`) or configure `tsc --noEmit` separately if needed.
- **Run Dev Server**: `npm run dev`
- **Testing**: No specific test command found in `package.json`. Assume testing might be manual or configured elsewhere.

## Code Style Guidelines

- **Formatting**: Follow existing code style. No specific Prettier config found; rely on ESLint for formatting rules where applicable.
- **Imports**: Use path aliases `@/*` as defined in `tsconfig.json`. Organize imports (e.g., React, external libs, internal modules).
- **Types**: Use TypeScript. `strict: true` is enabled in `tsconfig.json`, adhere to strict typing. Use provided types in `types/`.
- **Naming Conventions**: Follow standard TypeScript/React naming conventions (e.g., `PascalCase` for components/types, `camelCase` for variables/functions).
- **Components**: Use functional components with hooks. Leverage Shadcn UI components from `components/ui/`.
- **State Management**: Use React Context API (`contexts/`) where applicable.
- **Error Handling**: Implement robust error handling, especially for API routes and server actions.
- **Environment Variables**: Use `db/envConfig.ts` for database-related environment variables.
- **Git**: Follow contribution guidelines in `CONTRIBUTING.md`. PRs against `development`.

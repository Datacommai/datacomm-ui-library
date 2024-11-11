This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
---

## Development 
- Every component inherits from [Shadn UI](https://ui.shadcn.com/)
- Components should be generic and re-usable
- Every component should have `types` and `enums`

## Naming
- We follow industry standard naming `datacomm-component.tsx`

## Component workflow 
- Every componet should have a test attached and storybook entry
  - `datacomm-component.tsx`
  - `datacomm-component.test.tsx`
  - `datacomm-component.stories.tsx`
 ---

## Github worfklow 
- Create issue with easy to read title and clear description for the task
- When creating PR:
   - title should follow this standard naming: `#number - title` e.g. `#01 - Created datacomm component`
   - description should describe the tasks and key word `closes` with issue number
   - commit message should be simple and descriptive and follow this naming `#number - added colours`
   - Squash and merging after PR has been approved 



## Run Storybook:
- `npm run storybook`


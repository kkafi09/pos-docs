# Docusaurus Workflow

## Runtime

- Use Bun for dependency and script execution.
- Use Node.js 20 or newer.

## Commands

- Install dependencies with `bun install`.
- Start local development with `bun run start`.
- Build the static site with `bun run build`.
- Run TypeScript checks with `bun run typecheck`.

## Project Shape

- Course content lives in `docs/`.
- Docusaurus pages and React components live in `src/`.
- Static assets live in `static/`.
- Sidebar generation is configured in `sidebars.ts` and currently autogenerates from `docs/`.
- Docusaurus configuration lives in `docusaurus.config.ts`.

## Content Notes

- The site locale is Indonesian (`id`), so user-facing course content should stay in Indonesian unless a task asks otherwise.
- Broken links fail the build because `onBrokenLinks` is set to `throw`.

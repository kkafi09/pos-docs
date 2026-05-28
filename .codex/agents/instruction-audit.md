# Instruction Audit

## Contradictions

No direct contradictions were found in the available instruction source.

The only nuance is operational rather than contradictory: `RTK.md` says to prefix shell commands with `rtk`, while PowerShell cmdlets are not standalone PATH binaries. Keep the RTK rule and use `rtk proxy powershell -NoProfile -Command "<command>"` for PowerShell cmdlets.

## Root AGENTS.md Essentials

- One-sentence project description.
- Bun as the package manager.
- Node.js 20 or newer.
- Non-standard commands: `bun run start`, `bun run build`, and `bun run typecheck`.
- Links to detailed workflow files.

## Grouped Instructions

- Shell execution and RTK usage: `.codex/agents/shell-workflow.md`.
- Docusaurus runtime, commands, and content workflow: `.codex/agents/docusaurus-workflow.md`.
- Suggested course documentation structure: `.codex/agents/docs-structure.md`.

## Flagged For Deletion

- `which rtk`: redundant in this Windows PowerShell workspace; prefer `rtk --version` or `rtk gain` when verifying RTK.
- Repeating the full RTK examples in the root file: redundant once linked from a dedicated shell workflow file.
- Generic reminders such as "write clean code": not present in the available source, and should stay out because they are too vague to be actionable.

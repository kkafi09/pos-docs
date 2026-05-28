# Shell Workflow

## RTK

- Prefix shell commands with `rtk`.
- For normal executables, run commands directly through `rtk`, for example `rtk git status`, `rtk bun run build`, or `rtk rg "pattern"`.
- In PowerShell, cmdlets such as `Get-Content` and `Get-ChildItem` are not standalone executables. Run them through PowerShell via `rtk proxy powershell -NoProfile -Command "<command>"`.

## Verification

- Use `rtk --version` and `rtk gain` when checking RTK availability or token savings.

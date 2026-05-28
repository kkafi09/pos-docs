# Suggested Docs Structure

The current `docs/` tree is already close to the project shape. Keep course-facing material grouped by topic:

```text
docs/
  intro.mdx
  persiapan/
    _category_.json
    setup-lingkungan.mdx
  python/
    _category_.json
    dasar-python.mdx
    data-analysis.mdx
  r/
    _category_.json
    dasar-r.mdx
    data-frame-visualisasi.mdx
  git-github/
    _category_.json
    workflow-dasar.mdx
    kolaborasi-pull-request.mdx
  proyek/
    _category_.json
    project-mini.mdx
```

Use `_category_.json` files for sidebar labels and ordering. Keep agent-only operational guidance outside `docs/` so it is not published as course material.

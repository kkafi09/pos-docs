# Modul Asdos Pemrograman Open Source

Dokumentasi ini berisi modul pendamping praktikum Pemrograman Open Source untuk
materi R, Python, workflow Git/GitHub, dan proyek mini.

## Menjalankan Lokal

```bash
bun install
bun run start
```

Situs lokal akan berjalan di `http://localhost:3000`.

## Build

```bash
bun run build
```

Output statis akan dibuat di folder `build/`.

## Deployment GitHub Pages

Repository ini sudah memiliki workflow GitHub Actions di
`.github/workflows/deploy.yml`.

Langkah setup di GitHub:

1. Buka repository GitHub.
2. Masuk ke **Settings > Pages**.
3. Pada **Build and deployment**, pilih **Source: GitHub Actions**.
4. Push branch `main`.

Workflow akan menjalankan `bun install`, `bun run build`, lalu mempublish folder
`build/` ke GitHub Pages. `baseUrl` Docusaurus otomatis mengikuti nama
repository saat berjalan di GitHub Actions.

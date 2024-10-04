# SpaceX Launches Project - by Fahrezi Adha

## Project Structure

Aku telah merubah struktur project nya menjadi seperti ini, ada folder lib/query dan menyimpan semua definisi query graphQL di dalamnya, ada juga folder services yang berisikan class untuk mendapatkan data dari API SpaceX, dan juga folder hooks yang berisikan fungsi untuk mengambil data untuk client-side.

```
src/
├── app/
│   ├── api/
│   │   └── healthcheck/       # API for health check
│   │   └── revalidate/        # API for revalidate by a path
│   └── launches/              # Pages related to SpaceX launches
├── components/
│   ├── Launches/
│   │   └── LaunchDetail/      # Launch detail page and its components
│   └── Navigation/            # Navigation components
├── lib/                       # Utility files, helpers, and Apollo client setup
    ├── query/                 # GraphQL queries
└── __generated__/             # Generated types for GraphQL queries
└── services/                  # Services for fetching data from SpaceX API
```

## On-Demand Revalidation

Semua halaman akan dibuild static dan ter-revalidate selama 15 menit, tetapi kita juga bisa melakukan revalidasi secara on-demand dengan menggunakan endpoint:

```/api/revalidate?path=/launches/123 //Untuk revalidasi halaman spesifik
atau
/api/revalidate?path=* //Untuk revalidasi semua halaman```
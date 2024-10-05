# SpaceX Launches Project - Fahrezi Adha

## Prerequisites
Please set up environment variables in the `.env.example` file and rename it to `.env`.
```env
NEXT_PUBLIC_GRAPHQL_URI=https://spacex-production.up.railway.app/
```



## Getting Started

1. **Install Dependencies**
    ```bash
    npm install
    ```

2. **Generate Types for GraphQL Queries**
    ```bash
    npm run generate
    ```
    Or
    ```bash
    npm run generate:watch
    ```

3. **Run the Development Server**
    ```bash
    npm run dev
    ```


## Project Structure

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

## GraphQL Codegen
To activate codegen, I added some TypeScript plugins that can be seen in `codegen.ts`. To generate types, run the following script:
```
npm run generate
```
or
```
npm run generate --watch
```

## On-Demand Revalidation

All pages will be statically built and revalidated for 15 minutes, but we can also perform on-demand revalidation using the following endpoint:

```
/api/revalidate?path=/launches/123
```

Or if you want to revalidate all pages, use the path `*`
```
/api/revalidate?path=*
```

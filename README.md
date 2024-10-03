# SpaceX Launches Project

## Overview

This project is a Next.js application that uses Apollo GraphQL and the public unofficial SpaceX GraphQL API. It provides an overview of recent SpaceX launches and allows users to view detailed information about each launch, including additional data about rockets associated with the launches.

## Project Structure

The main folders and their responsibilities are as follows:

```
src/
├── app/
│   ├── api/
│   │   └── healthcheck/       # API endpoints, e.g., for health check
│   └── launches/              # Pages related to SpaceX launches
├── components/
│   ├── Launches/
│   │   └── LaunchDetail/      # Launch detail page and its components
│   └── Navigation/            # Navigation components
├── lib/                       # Utility files, helpers, and Apollo client setup
└── __generated__/             # Generated types for GraphQL queries
```

## Task Requirements

Your task is to implement several features and improvements to the project codebase:

### 1. **Refactoring for Better Structure**
   Refactor the current codebase to introduce a more maintainable architecture. You can consider using **domain objects**, or a **Repository-Mapper-Presentation** layers structure to make the code easier to adapt to future API changes. This will help keep the data-fetching logic separate from the presentation layer, making it more maintainable and modular. Separate requests and JSX code.

### 2. **15-Minute Revalidation Time**
   Set up all pages to **revalidate every 15 minutes**. This ensures that the pages are statically generated but also refresh periodically to reflect any new data.

### 3. **On-Demand Revalidation API Endpoint**
   Create an API endpoint to **trigger on-demand revalidation**. This endpoint should allow:
   - Revalidating specific pages based on their path.
   - Revalidating the entire website if needed.

### 4. **Implement `LaunchDetail` Page**
   Use the existing GraphQL query in the `LaunchDetail` directory to build a page that dynamically loads SpaceX launch details based on the route parameters. 
   - This page should be **dynamically routed** (`/launches/[id]`), with `[id]` representing the launch ID.

### 5. **Extend `LaunchDetail` to Show Rocket Details**
   Enhance the `LaunchDetail` page to include **rocket information**:
   - Add a button to the page that triggers a client-side request to fetch and display the **rocket details**. 
   - The rocket data should be dynamically fetched upon button click and **must not be part of the static HTML**.
   - You can find the necessary query for rocket details in the `Rocket.query.ts` file.

### 6. **Static Generation of Pages**
   Ensure that all pages are **statically generated** at build time, except for the dynamic routes and rocket details fetched dynamically from the client.

### 7. **Styling Guidelines**
   The styling of the project is not a primary focus, so keep it simple. Ensure that all text is readable and there are no console errors.

### 8. **GraphQL Code Generation**
   Use the provided script to **generate TypeScript types** based on GraphQL queries. This helps maintain type safety and consistency across the project.
   - Run `npm run generate` whenever new queries or changes are made.
   - **Bonus**: Add an additional command to **watch for changes** and automatically generate types.

---

## Evaluation Criteria

The task will be evaluated on:

- **Code Structure & Organization**: Clean, modular code that uses domain objects or layers for separation of concerns.
- **Next.js Features & Data Flow**: Correct use of static generation with 15-minute revalidation and proper dynamic routes.
- **Client-Server Interaction**: Effective use of server components and client-side fetching for dynamic data, ensuring a clear separation.
- **TypeScript & GraphQL**: Proper type safety, usage of generated types, and utility types.
- **Reusability & Scalability**: Code is adaptable to future API changes with minimal refactoring.
- **Cleanliness**: Readable, well-organized code without errors.

Bonus points for implementing a watch command for type generation, handling edge cases, and clear abstractions for API logic.

## Additional Notes

If any part of the task is unfamiliar or beyond your experience, please make your best effort. Completing the entire task is not mandatory; focus on demonstrating your understanding and implementation skills.

**You have complete freedom in how you implement your solutions. While you're welcome to install additional libraries, please note that all requirements can be met without any extra installations. Your best resources here are the Next.js and React documentation.**

---

## Getting Started

1. **Install Dependencies**
    ```bash
    npm install
    ```

2. **Generate Types for GraphQL Queries**
    ```bash
    npm run generate
    ```

3. **Run the Development Server**
    ```bash
    npm run dev
    ```

4. **Bonus - Automatically Watch and Generate Types**
   (Optional) Add a script to your `package.json` to **watch for changes** and regenerate GraphQL types.

5. **Build and Revalidate the Project**
    To build and check the static generation and revalidation:
    ```bash
    npm run build
    npm run start
    ```

## Technologies Used
- **Next.js** (with app router): Framework for server-side rendering and static site generation.
- **Apollo Client**: A GraphQL client for fetching data.
- **TypeScript**: Ensuring type safety across the project.
- **SpaceX GraphQL API**: A public API providing data about SpaceX launches and rockets. You can read more about it here: https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home

---

Feel free to reach out if you have any questions about the requirements or setup. Good luck! 🚀

---

This `README.md` provides clear instructions for the task, project structure, and setup guidelines while highlighting the main requirements for the assignment. Let me know if any additional details or changes are needed!
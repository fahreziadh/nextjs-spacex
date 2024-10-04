import { from, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { getEnv } from "./getEnv";
// Import the generated types

const { NEXT_PUBLIC_GRAPHQL_URI } = getEnv();

const httpLink = new HttpLink({
  uri: NEXT_PUBLIC_GRAPHQL_URI,
});

const server = new ApolloClient({
  link:
    typeof window === "undefined"
      ? from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : from([httpLink]),

  cache: new InMemoryCache(),
});

export default server;

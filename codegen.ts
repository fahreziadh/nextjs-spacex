import { getEnv } from "./src/lib/getEnv";
import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: getEnv().NEXT_PUBLIC_GRAPHQL_URI,
  overwrite: true,
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      }
    },
  },
};

export default config;

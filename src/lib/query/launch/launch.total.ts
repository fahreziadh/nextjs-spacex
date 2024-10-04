import { gql } from "@/__generated__";

export const GET_LAUNCH_TOTAL = gql(`
  query GetLaunchTotal {
    launches {
      id
    }
  }
`);
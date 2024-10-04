import { gql } from "@/__generated__/";

export const GET_LAUNCH_LIST = gql(`
  query GetLaunchList($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      links {
        mission_patch
        video_link
      }
    }
  }
`);


import { gql } from "@/__generated__";

export const GET_LAUNCHES = gql(`
  query GetLaunches {
    launches {
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

import { gql } from "@/__generated__";

export const GET_LATEST_LAUNCH = gql(`
  query LatestLaunch {
    launchLatest {
      id
      mission_name
      details
      launch_date_utc
      links {
        video_link
      }
    }
  }
`);

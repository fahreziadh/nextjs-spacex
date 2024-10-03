import { gql } from "@/__generated__";

export const LATEST_LAUNCH_QUERY = gql(`
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

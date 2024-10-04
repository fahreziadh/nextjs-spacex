import client from "@/lib/apolloClient";
import { GET_LATEST_LAUNCH } from "@/lib/query/launch/launch.latest";
import { GET_LAUNCH_LIST } from "@/lib/query/launch/launch.list";

export class LaunchService {
  async getLaunchList(){
    const { data } = await client.query({
      query: GET_LAUNCH_LIST,
    });

    return data.launches
  }

  async getLatestLaunch(){
    const { data } = await client.query({
      query: GET_LATEST_LAUNCH,
    });

    return data.launchLatest
  }
}
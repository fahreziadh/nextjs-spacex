import server from "@/lib/apollo.server";
import { GET_LAUNCH_DETAIL } from "@/lib/query/launch/launch.detail";
import { GET_LATEST_LAUNCH } from "@/lib/query/launch/launch.latest";
import { GET_LAUNCH_LIST } from "@/lib/query/launch/launch.list";
import { GET_LAUNCH_TOTAL } from "@/lib/query/launch/launch.total";

export class LaunchService {
  async getLaunchList(variables?: { limit: number, offset: number }) {
    const getLaunchList = server.query({
      query: GET_LAUNCH_LIST,
      variables: {
        limit: variables?.limit ?? 10,
        offset: variables?.offset ?? 0,
      }
    });

    const getTotalLaunch = server.query({
      query: GET_LAUNCH_TOTAL,
    });
    const [launchList, totalLaunch] = await Promise.all([getLaunchList, getTotalLaunch]);

    const total = totalLaunch.data.launches?.length ?? 0;
    const totalPages = Math.ceil(total / (variables?.limit ?? 10));


    return {
      launches: launchList.data.launches,
      totalLaunches: total,
      totalPages
    }
  }

  async getLatestLaunch() {
    const { data } = await server.query({
      query: GET_LATEST_LAUNCH,
    });

    return data.launchLatest
  }

  async getTotalLaunches(){
    const { data } = await server.query({
      query: GET_LAUNCH_TOTAL,
    });

    return data.launches?.length ?? 0
  }

  async getLaunchDetail(id: string){
    const { data } = await server.query({
      query: GET_LAUNCH_DETAIL,
      variables: { id }
    });

    return data.launch
  }
}
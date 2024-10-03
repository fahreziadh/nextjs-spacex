import client from "@/lib/apolloClient";

export class LaunchesService {
  async getLaunches(){
    const { data } = await client.query({
      query: GET_LAUNCHES,
    });
  }
}
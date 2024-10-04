import { LaunchService } from '@/services/launch.service';
import { notFound } from 'next/navigation';
import React from 'react'
import BackButton from './page.back-button';
import PageRocket from './page.rocket';

export const dynamicParams = true;
export const revalidate = 900 // 15 minutes

export async function generateStaticParams() {
  const { launches } = await new LaunchService().getLaunchList({ limit: 205, offset: 0 }) // generate all possible params
  return launches?.filter((e) => e?.id).map((launch) => ({ launchesId: launch?.id })) ?? [];
}

const Page = async ({ params }: { params: { launchesId: string } }) => {

  const data = await new LaunchService().getLaunchDetail(params.launchesId).catch(() => null)

  if (!data) {
    return notFound()
  }

  return (
    <div style={{ color: "white" }}>
      <BackButton />
      <div style={{ marginBottom: "20px" }}>
        <h1>Launch Details</h1>
        <h2>{data.mission_name}</h2>
        <p><strong>Launch Date:</strong> {new Date(data.launch_date_utc).toLocaleString()}</p>
        <p><strong>Details:</strong> {data.details}</p>
        <p><strong>Launch Year:</strong> {data.launch_year}</p>
        <p><strong>Success:</strong> {data.launch_success ? "Yes" : "No"}</p>
        {data.links?.video_link && (
          <p>
            <strong>Video Link:</strong> <a href={data.links.video_link} target="_blank" rel="noopener noreferrer">Watch here</a>
          </p>
        )}
      </div>
      {data.rocket?.rocket?.id ? <PageRocket rocketId={data.rocket.rocket.id} /> : null}

    </div>
  )
}

export default Page
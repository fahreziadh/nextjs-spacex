import Image from "next/image";
import styles from "./launches.module.scss";
import { LaunchService } from "@/services/launch.service";
import Link from "next/link";

const Page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = parseInt(searchParams.page ?? "1")
  const limit = 12
  const offset = (currentPage - 1) * limit
  const { launches,totalPages } = await new LaunchService().getLaunchList({ limit, offset })

  if (!launches?.length) {
    return <div style={{ color: "white", marginTop: "24px" }}>No launches found</div>;
  }

  return (
    <div className={styles.launchesContainer}>
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        {currentPage > 1 ? <Link href={`/launches?page=${currentPage - 1}`} className={styles.link}>
          {`<`} Prev
        </Link> : <p className={`${styles.link}`} style={{ opacity: "0.5", cursor: "no-drop" }}>{`<`} Prev</p>}
        <span className={styles.link} style={{color: "white"}}>{`${currentPage} of ${totalPages}`}</span>
        {currentPage < totalPages ? <Link href={`/launches?page=${currentPage + 1}`} className={styles.link}> Next {`>`}</Link> : <p className={`${styles.link}`} style={{ opacity: "0.5", cursor: "no-drop" }}> Next {`>`}</p>}
      </div>
      {launches
        .filter((launch): launch is NonNullable<typeof launch> =>
          Boolean(launch)
        )
        .map((launch) => (
          <div key={launch.id} className={styles.launchCard}>
            {launch.links?.mission_patch && (
              <Image
                width={100}
                height={100}
                src={launch.links?.mission_patch}
                alt={`${launch.mission_name} mission patch`}
                className={styles.missionPatch}
              />
            )}
            <h3 className={styles.launchTitle}>{launch.mission_name}</h3>
            <p className={styles.launchDate}>
              {new Date(launch.launch_date_utc).toLocaleDateString()}
            </p>
            <p className={styles.rocketName}>{launch.rocket?.rocket_name}</p>
            <div className={styles.linksContainer}>
              {launch.links?.video_link && (
                <a
                  href={launch.links?.video_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Watch Launch
                </a>
              )}
              {/* TODO: Change this to a proper detail page */}
              <a href={`/launches/${launch.id}`} className={styles.link}>
                View Details
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
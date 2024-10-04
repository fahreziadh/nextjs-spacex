import client from "@/lib/apolloClient";
import { GET_LAUNCHES } from "./launches.query";
import styles from "./launches.module.scss";

export const Launches = async () => {
  const { data } = await client.query({
    query: GET_LAUNCHES,
  });

  if (!data?.launches) {
    return <div>No launches found</div>;
  }

  return (
    <div className={styles.launchesContainer}>
      {data?.launches
        .filter((launch): launch is NonNullable<typeof launch> =>
          Boolean(launch)
        )
        .map((launch) => (
          <div key={launch.id} className={styles.launchCard}>
            {launch.links?.mission_patch && (
              <img
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

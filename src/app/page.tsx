import client from "@/lib/apolloClient";
import { LATEST_LAUNCH_QUERY } from "./page.query";
import styles from "./page.module.scss"; // Ensure styles are imported

export default async function Page() {
  const { data } = await client.query({ query: LATEST_LAUNCH_QUERY });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Homepage</h1>
        <p className={styles.paragraph}>
          This is a generic homepage with some information about SpaceX&apos;s
          latest launch.
        </p>

        <h2 className={styles.subtitle}>Latest SpaceX Launch</h2>
        {data.launchLatest ? (
          <div key={data.launchLatest.id} className={styles.launchDetails}>
            <h3 className={styles.subheading}>{data.launchLatest.mission_name}</h3>
            <p className={styles.paragraph}>{data.launchLatest.details}</p>
            <p className={styles.paragraph}>
              <strong>Date:</strong>{" "}
              {new Date(data.launchLatest.launch_date_utc).toLocaleDateString()}
            </p>
            {data.launchLatest.links?.video_link && (
              <a
                href={data.launchLatest.links?.video_link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.launchDetailsLink}
              >
                Watch the launch
              </a>
            )}
          </div>
        ) : (
          <p className={styles.paragraph}>Loading latest launch...</p>
        )}
      </div>
    </div>
  );
}

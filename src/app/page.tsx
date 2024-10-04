import styles from "./page.module.scss"; // Ensure styles are imported
import { LaunchService } from "@/services/launch.service";

export default async function Page() {
  const dataLaunchLatest = await new LaunchService().getLatestLaunch()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Homepage</h1>
        <p className={styles.paragraph}>
          This is a generic homepage with some information about SpaceX&apos;s
          latest launch.
        </p>

        <h2 className={styles.subtitle}>Latest SpaceX Launch</h2>
        {dataLaunchLatest ? (
          <div key={dataLaunchLatest.id} className={styles.launchDetails}>
            <h3 className={styles.subheading}>{dataLaunchLatest.mission_name}</h3>
            <p className={styles.paragraph}>{dataLaunchLatest.details}</p>
            <p className={styles.paragraph}>
              <strong>Date:</strong>{" "}
              {new Date(dataLaunchLatest.launch_date_utc).toLocaleDateString()}
            </p>
            {dataLaunchLatest.links?.video_link && (
              <a
                href={dataLaunchLatest.links?.video_link}
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

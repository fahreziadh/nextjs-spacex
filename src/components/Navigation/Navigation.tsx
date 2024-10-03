import styles from './Navigation.module.scss';

export const Navigation = () => {
  return <nav className={styles.nav}>
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/launches">Launches</a></li>
    </ul>
  </nav>
}

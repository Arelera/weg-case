import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Wegg</Link>
      </h1>
      <Link href="/logs" className={styles.logs}>
        View Logs
      </Link>
    </header>
  )
}

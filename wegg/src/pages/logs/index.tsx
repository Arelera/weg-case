import MainLayout from '@/layouts/MainLayout'
import { useAppSelector } from '@/store/hooks'
import styles from './LogsPage.module.scss'

type Props = {}

export default function Logs({}: Props) {
  const { data } = useAppSelector((state) => state.logs)

  return (
    <MainLayout>
      {data.length > 0 ? (
        <ul className={styles.logs}>
          {data.map((log, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.timestamp}>{log.timestamp}</div>
              <div>{JSON.stringify(log.action, null, 2)}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No logs found.</div>
      )}
    </MainLayout>
  )
}

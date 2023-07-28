import Header from '@/components/Header'
import { ReactNode } from 'react'
import styles from './MainLayout.module.scss'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

import { ReactNode } from 'react'
import styles from './VoteButton.module.scss'

type Props = {
  onClick: () => void
  children: ReactNode
}

export default function VoteButton({ onClick, children }: Props) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

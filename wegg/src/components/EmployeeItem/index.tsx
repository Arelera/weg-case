import avatarPlaceholder from '@/assets/images/avatar-placeholder.png'
import { useAppDispatch, useAppSelector } from '@/store'
import { downvoteEmployee, upvoteEmployee } from '@/store/slices/employees'
import { Employee } from '@/store/types'
import Link from 'next/link'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import styles from './EmployeeItem.module.scss'
import VoteButton from './VoteButton'

type Props = {
  employee: Employee
}

export default function EmployeeItem({ employee }: Props) {
  const dispatch = useAppDispatch()
  const { votes } = useAppSelector((state) => state.employees)

  return (
    <div className={styles.item}>
      <Link href={`/${employee.id}`} className={styles.meta}>
        <img
          className={styles.avatar}
          placeholder={avatarPlaceholder.src}
          src={employee.avatar}
          alt="avatar"
        />
        <div className={styles.inner}>
          <h3 className={styles.name}>
            {employee.firstName} {employee.lastName}
          </h3>
          <div className={styles.job}>{employee.job}</div>
        </div>
      </Link>
      <div className={styles.votes}>
        <VoteButton
          onClick={() => dispatch(upvoteEmployee({ id: employee.id }))}
        >
          <BiChevronUp size={16} />
        </VoteButton>
        <div>{votes[employee.id] || 0}</div>
        <VoteButton
          onClick={() => dispatch(downvoteEmployee({ id: employee.id }))}
        >
          <BiChevronDown size={16} />
        </VoteButton>
      </div>
    </div>
  )
}

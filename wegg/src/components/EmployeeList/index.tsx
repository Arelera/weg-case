import { Employee } from '@/store/types'
import EmployeeItem from '../EmployeeItem'
import styles from './EmployeeList.module.scss'
import { useAppSelector } from '@/store/hooks'

type Props = {
  employees: Employee[]
}

export default function EmployeeList({ employees }: Props) {
  const { votes } = useAppSelector((state) => state.employees)

  return (
    <ul className={styles.list}>
      {employees
        .slice()
        .sort((empA, empB) => (votes[empB.id] || 0) - (votes[empA.id] || 0))
        .map((employee, i) => (
          <EmployeeItem employee={employee} key={i} />
        ))}
    </ul>
  )
}

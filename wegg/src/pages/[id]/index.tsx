import avatarPlaceholder from '@/assets/images/avatar-placeholder.png'
import EmployeeList from '@/components/EmployeeList'
import apolloClient from '@/graphql/client'
import { GET_EMPLOYEE_DETAILS } from '@/graphql/queries'
import { GetEmployeeDetailsResults } from '@/graphql/queries/types'
import MainLayout from '@/layouts/MainLayout'
import { Employee } from '@/store/types'
import { GetServerSideProps } from 'next'
import styles from './EmployeeDetailsPage.module.scss'

type Props = {
  employee: Employee
  loading: boolean
  error: string | null
}

export default function EmployeeDetails({ employee }: Props) {
  return (
    <MainLayout>
      <div className={styles.top}>
        <img
          className={styles.avatar}
          placeholder={avatarPlaceholder.src}
          src={employee.avatar}
          alt="avatar"
        />
        <div>
          <h2 className={styles.name}>
            {employee.firstName} {employee.lastName}
          </h2>
          <div className={styles.job}>
            <span className={styles.title}>{employee.job}</span> at{' '}
            <span className={styles.company}>{employee.company.name}</span>
          </div>

          <ul className={styles.contact}>
            <li>{employee.address}</li>-
            <li>
              <a href={`mailto:${employee.email}`}>{employee.email}</a>
            </li>
            -
            <li>
              <a href={`tel:${employee.phone}`}>{employee.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bio}>{employee.bio}</div>

      <h2 className={styles.subordinates}>Subordinates</h2>
      <EmployeeList employees={employee.subordinates} />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data, loading, error } =
    await apolloClient.query<GetEmployeeDetailsResults>({
      query: GET_EMPLOYEE_DETAILS,
      variables: { id: query.id },
    })

  return {
    props: {
      employee: data.employee,
      loading,
      error: error?.message || null,
    },
  }
}

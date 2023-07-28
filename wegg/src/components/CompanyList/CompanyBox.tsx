import EmployeeList from '../EmployeeList'

type Props = {
  company: any
}

export default function CompanyBox({ company }: Props) {
  return (
    <li>
      <h2>{company.name}</h2>
      <EmployeeList employees={company.employees} />
    </li>
  )
}

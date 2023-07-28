import CompanyBox from './CompanyBox'

type Props = {
  companies: any[]
}

export default function CompanyList({ companies }: Props) {
  return (
    <ul>
      {companies.map((company, i) => (
        <CompanyBox company={company} key={i} />
      ))}
    </ul>
  )
}

import CompanyList from '@/components/CompanyList'
import EmployeeList from '@/components/EmployeeList'
import Header from '@/components/Header'
import apolloClient from '@/graphql/client'
import { GET_COMPANIES } from '@/graphql/queries'
import { GetCompaniesResults } from '@/graphql/queries/types'
import MainLayout from '@/layouts/MainLayout'
import { Company } from '@/store/types'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

type Props = {
  companies: Company[]
  error: string | null
  loading: boolean
}

export default function Home({ companies, loading, error }: Props) {
  const [isGroupedByCompany, setIsGroupedByCompany] = useState(false)

  return (
    <MainLayout>
      {/* <button onClick={() => setIsGroupedByCompany((val) => !val)}>
        Group
      </button> */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Had an error.</div>
      ) : companies && isGroupedByCompany ? (
        <CompanyList companies={companies} />
      ) : (
        <EmployeeList
          employees={companies.flatMap((company) => company.employees)}
        />
      )}
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, loading, error } =
    await apolloClient.query<GetCompaniesResults>({
      query: GET_COMPANIES,
    })

  return {
    props: {
      companies: data.allCompanies,
      loading,
      error: error?.message || null,
    },
  }
}

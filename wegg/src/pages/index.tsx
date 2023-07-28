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
}

export default function Home({ companies, error }: Props) {
  return (
    <MainLayout>
      {error ? (
        <div>{error}</div>
      ) : (
        <EmployeeList
          employees={companies.flatMap((company) => company.employees)}
        />
      )}
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await apolloClient.query<GetCompaniesResults>({
    query: GET_COMPANIES,
  })

  return {
    props: {
      companies: data.allCompanies,
      error: error?.message || null,
    },
  }
}

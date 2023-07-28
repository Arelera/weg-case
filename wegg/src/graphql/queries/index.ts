import { gql } from '@apollo/client'

export const GET_COMPANIES = gql`
  query GetCompanies {
    allCompanies {
      id
      name
      employees {
        id
        firstName
        lastName
        avatar
        job
        address
        bio
      }
    }
  }
`

export const GET_EMPLOYEE_DETAILS = gql`
  query GetEmployeeDetails($id: ID!) {
    employee(id: $id) {
      id
      firstName
      lastName
      avatar
      job
      address
      bio
      email
      phone
      subordinates {
        id
        firstName
        lastName
        avatar
        job
      }
      company {
        name
      }
    }
  }
`

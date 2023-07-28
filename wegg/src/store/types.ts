export type Company = {
  id: string
  name: string
  industry: string
  employees: Employee[]
}

export type Employee = {
  id: string
  firstName: string
  lastName: string
  address: string
  avatar: string
  job: string
  bio: string
  subordinates: Employee[]
  company: Company
  email: string
  phone: string
}

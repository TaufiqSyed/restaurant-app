'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../../components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../../components/container'
import { IEmployee } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { MockEmployeeRepository } from './_data/mock_employee_repository'
import { LoadingSpinner } from '../../components/loading_spinner'

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    MockEmployeeRepository.fetchAllEmployees().then((employees) => {
      setEmployees(employees)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/employees/'>
      {employees.map((employee) => (
        <DataItem
          key={employee.employee_id}
          titleField='employee_id'
          json={employee}
          onClick={(): void => {
            router.push(`/employees/${employee.employee_id}`)
          }}
        />
      ))}
    </Container>
  )
}

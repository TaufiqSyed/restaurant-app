'use client'

import { Box, Grid, Text } from '@chakra-ui/react'
import { DataItem } from '../../components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../../components/container'
import { IEmployee } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { MockEmployeeRepository } from './_data/mock_employee_repository'
import { LoadingSpinner } from '../../components/loading_spinner'
import { EmployeeRepository } from './_data/employee_repository'
import { EotmItem } from '@/components/eotm_item'

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [empOfTheMonth, setEmpOfTheMonth] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Mock
    // EmployeeRepository.fetchAllEmployees().then((employees) => {
    //   setEmployees(employees)
    //   setLoading(false)
    // })
    init()
  }, [])

  const init = async () => {
    const [emps, eotm] = await Promise.all([
      EmployeeRepository.fetchAllEmployees(),
      EmployeeRepository.employeeWithMostOrders(),
    ])
    const { occurrence_count, ...rest } = eotm
    setEmployees(emps)
    setEmpOfTheMonth({ ...rest, '# of orders taken': occurrence_count })
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <>
      <Box
        p='0 40px'
        // p='20px 120px'
        mt='130px'
      >
        <EotmItem key='eotm' titleField='name' json={empOfTheMonth} w='100%' />
      </Box>
      <Container root_href='/employees/' mt='-120px'>
        {employees.map((employee) => (
          <DataItem
            key={employee.userid}
            titleField='name'
            omitFields={['password']}
            json={employee}
            onClick={(): void => {
              router.push(`/employees/${employee.userid}`)
            }}
          />
        ))}
      </Container>
    </>
  )
}

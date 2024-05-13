'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/components/data_item_detail'
import { Container } from '@/components/container'
import { useEffect, useState } from 'react'
import { IMenuItem, IEmployee } from '@/constants/interfaces'
import EmployeeForm from '../employee_form'
import { MockEmployeeRepository } from '../_data/mock_employee_repository'
import { LoadingSpinner } from '@/components/loading_spinner'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { EmployeeRepository } from '../_data/employee_repository'

export default function Employee({
  isEdit,
  id,
}: {
  isEdit: boolean
  id: string
}) {
  const [employee, setEmployee] = useState<IEmployee | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const employee_ = await // Mock
    EmployeeRepository.fetchEmployeeById(id)
    setEmployee(employee_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/employees/'>
      {isEdit ? (
        <DataItemDetailEdit
          dataHeader='Employee Information'
          json={employee!}
          onBack={() => {
            router.push('/employees/')
          }}
          onSave={(values: IEmployee) => {
            console.log(values)
          }}
          onCancel={() => {
            router.push(`/employees/${employee!.userid}`)
          }}
          FormikForm={EmployeeForm}
          omitFields={undefined}
        />
      ) : (
        <DataItemDetail
          dataHeader='Employee Information'
          // titleField='userid'
          json={employee!}
          onBack={() => {
            router.push('/employees')
          }}
          onEdit={() => {
            router.push(`/employees/${employee!.userid}/edit`)
          }}
          onDelete={() => {
            EmployeeRepository.deleteEmployee(id).then((_) => {
              router.push('/employees')
            })
          }}
          FormikForm={EmployeeForm}
        />
      )}
    </Container>
  )
}

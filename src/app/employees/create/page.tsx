'use client'

import { Container } from '@/components/container'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { IMenuItem, IEmployee } from '@/constants/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { MockEmployeeRepository } from '../_data/mock_employee_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { useState, useEffect } from 'react'
import EmployeeForm from '../employee_form'
import { LoadingSpinner } from '@/components/loading_spinner'
import { EmployeeRepository } from '../_data/employee_repository'

export default function EmployeeCreatePage() {
  const emptyEmployee =
    // Mock
    EmployeeRepository.emptyEmployee()
  const router = useRouter()

  return (
    <Container root_href='/employees/'>
      <DataItemDetailEdit
        dataHeader='Create Employee'
        json={emptyEmployee!}
        onBack={() => {
          router.push('/employees/')
        }}
        onSave={(values: IEmployee) => {
          console.log('dfjalkflsadfkljalfkj')
          EmployeeRepository.createEmployee(values).then((_) => {
            router.push('/employees/')
          })
        }}
        onCancel={() => {
          router.push('/employees/')
        }}
        FormikForm={EmployeeForm}
        omitFields={undefined}
      />
    </Container>
  )
}

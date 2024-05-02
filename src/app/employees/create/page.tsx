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

export default function EmployeeCreatePage() {
  const emptyEmployee = MockEmployeeRepository.emptyEmployee()
  const router = useRouter()

  return (
    <Container root_href='/employees/'>
      <DataItemDetailEdit
        dataHeader='Create Employee'
        json={emptyEmployee!}
        onBack={() => {
          router.push('/')
        }}
        onSave={(values: IEmployee) => {
          console.log(values)
        }}
        onCancel={() => {
          router.push('/')
        }}
        FormikForm={EmployeeForm}
        omitFields={undefined}
      />
    </Container>
  )
}

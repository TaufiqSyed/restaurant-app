'use client'

import { Container } from '@/components/container'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { IMenuItem, ICustomer } from '@/constants/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { MockCustomerRepository } from '../_data/mock_customer_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { useState, useEffect } from 'react'
import CustomerForm from '../customer_form'
import { LoadingSpinner } from '@/components/loading_spinner'

export default function CustomerCreatePage() {
  const emptyCustomer = MockCustomerRepository.emptyCustomer()
  const router = useRouter()

  return (
    <Container root_href='/customers/'>
      <DataItemDetailEdit
        dataHeader='Create Customer'
        json={emptyCustomer!}
        onBack={() => {
          router.push('/')
        }}
        onSave={(values: ICustomer) => {
          console.log(values)
        }}
        onCancel={() => {
          router.push('/')
        }}
        FormikForm={CustomerForm}
        omitFields={undefined}
      />
    </Container>
  )
}

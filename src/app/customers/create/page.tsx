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
import { CustomerRepository } from '../_data/customer_repository'

export default function CustomerCreatePage() {
  const emptyCustomer = CustomerRepository.emptyCustomer()
  const router = useRouter()

  return (
    <Container root_href='/customers/'>
      <DataItemDetailEdit
        dataHeader='Create Customer'
        json={emptyCustomer!}
        onBack={() => {
          router.push('/customers/')
        }}
        onSave={(values: ICustomer) => {
          console.log(values)
          CustomerRepository.createCustomer(values).then((e) => {
            router.push('/customers/')
          })
        }}
        onCancel={() => {
          router.push('/customers/')
        }}
        FormikForm={CustomerForm}
        omitFields={undefined}
      />
    </Container>
  )
}

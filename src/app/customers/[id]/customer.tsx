'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/components/data_item_detail'
import { Container } from '@/components/container'
import { useEffect, useState } from 'react'
import { IMenuItem, ICustomer } from '@/constants/interfaces'
import CustomerForm from '../customer_form'
import { MockCustomerRepository } from '../_data/mock_customer_repository'
import { LoadingSpinner } from '@/components/loading_spinner'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'

export default function Customer({
  isEdit,
  id,
}: {
  isEdit: boolean
  id: string
}) {
  const [customer, setCustomer] = useState<ICustomer | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const customer_ = await MockCustomerRepository.fetchCustomerById(1)
    setCustomer(customer_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/customers/'>
      {isEdit ? (
        <DataItemDetailEdit
          dataHeader='Customer Information'
          // titleField='customer_id'
          json={customer!}
          onBack={() => {
            router.push('/')
          }}
          onSave={(values: ICustomer) => {
            console.log(values)
          }}
          onCancel={() => {
            router.push(`/customers/${customer!.customer_id}`)
          }}
          FormikForm={CustomerForm}
          omitFields={undefined}
        />
      ) : (
        <DataItemDetail
          dataHeader='Customer Information'
          // titleField='customer_id'
          json={customer!}
          onBack={() => {
            router.push('/customers')
          }}
          onEdit={() => {
            router.push(`/customers/${customer!.customer_id}/edit`)
          }}
          onDelete={() => {}}
          FormikForm={CustomerForm}
        />
      )}
    </Container>
  )
}

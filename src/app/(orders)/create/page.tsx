'use client'

import { Container } from '@/components/container'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { IMenuItem, IOrder, IPartialOrder } from '@/constants/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { MockOrderRepository } from '../_data/mock_order_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { useState, useEffect } from 'react'
import OrderForm from '../order_form'
import { LoadingSpinner } from '@/components/loading_spinner'

export default function OrderCreatePage() {
  const emptyOrder = MockOrderRepository.emptyOrder()
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const menuItems_ = await MockMenuItemRepository.fetchAllMenuItems()
    setMenuItems(menuItems_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/'>
      <DataItemDetailEdit
        dataHeader='Create Order'
        json={emptyOrder!}
        onBack={() => {
          router.push('/')
        }}
        onSave={(values: IOrder) => {
          console.log(values)
        }}
        onCancel={() => {
          router.push('/')
        }}
        FormikForm={OrderForm}
        menuItems={menuItems!}
        omitFields={undefined}
      />
    </Container>
  )
}

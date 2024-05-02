'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/app/shared_components/data_item_detail'
import { Container } from '@/app/shared_components/container'
import { useEffect, useState } from 'react'
import { IMenuItem, IOrder, IPartialOrder } from '@/constants/interfaces'
import OrderForm from '../order_form'
import { MockOrderRepository } from '../_data/mock_order_repository'
import { LoadingSpinner } from '@/app/shared_components/loading_spinner'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { DataItemDetailEdit } from '@/app/shared_components/data_item_detail_edit'

export default function Order({ isEdit, id }: { isEdit: boolean; id: string }) {
  const [order, setOrder] = useState<IOrder | null>(null)
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const [order_, menuItems_] = await Promise.all([
      MockOrderRepository.fetchOrderById(1),
      MockMenuItemRepository.fetchAllMenuItems(),
    ])
    const orderWithMenuSelects: IOrder = {
      ...order_,
      menu_selects: (order_?.menu_items ?? []).map((e) => ({
        label: e.item_name,
        value: e.item_id,
      })),
    }
    setOrder(orderWithMenuSelects)
    setMenuItems(menuItems_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/'>
      {isEdit ? (
        <DataItemDetailEdit
          dataHeader='Order Information'
          // titleField='order_id'
          json={order!}
          onBack={() => {
            router.push('/')
          }}
          onSave={(values: IPartialOrder) => {
            console.log(values)
          }}
          onCancel={() => {
            router.push(`/${order!.order_id}`)
          }}
          FormikForm={OrderForm}
          omitFields={undefined}
          menuItems={menuItems!}
        />
      ) : (
        <DataItemDetail
          dataHeader='Order Information'
          // titleField='order_id'
          json={order!}
          onBack={() => {
            router.push('/')
          }}
          onEdit={() => {
            router.push(`/${order!.order_id}/edit`)
          }}
          onDelete={() => {}}
          menuItems={menuItems!}
          FormikForm={OrderForm}
        />
      )}
    </Container>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/components/data_item_detail'
import { Container } from '@/components/container'
import { useEffect, useState } from 'react'
import { IMenuItem, IOrder, IPartialOrder } from '@/constants/interfaces'
import OrderForm from '../order_form'
import { MockOrderRepository } from '../_data/mock_order_repository'
import { LoadingSpinner } from '@/components/loading_spinner'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { MenuItemRepository } from '@/app/menu/_data/menu_item_repository'
import { OrderRepository } from '../_data/order_repository'

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
      // Mock
      OrderRepository.fetchOrderById('orderid'),
      // Mock
      MenuItemRepository.fetchAllMenuItems(),
    ])
    const orderWithMenuSelects: IOrder = {
      ...order_,
      menu_selects: (order_?.menu_items ?? []).map((e) => ({
        label: e.itemname,
        value: e.itemid,
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
          json={order!}
          onBack={() => {
            router.push('/')
          }}
          onSave={(values: IPartialOrder) => {
            console.log(values)
          }}
          onCancel={() => {
            router.push(`/${order!.orderid}`)
          }}
          FormikForm={OrderForm}
          omitFields={undefined}
          menuItems={menuItems!}
        />
      ) : (
        <DataItemDetail
          dataHeader='Order Information'
          // titleField='orderid'
          json={order!}
          onBack={() => {
            router.push('/')
          }}
          onEdit={() => {
            router.push(`/${order!.orderid}/edit`)
          }}
          onDelete={() => {}}
          menuItems={menuItems!}
          FormikForm={OrderForm}
        />
      )}
    </Container>
  )
}

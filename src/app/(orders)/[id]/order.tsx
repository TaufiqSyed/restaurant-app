'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/components/data_item_detail'
import { Container } from '@/components/container'
import { useEffect, useState } from 'react'
import { ICustomer, IEmployee, IMenuItem, IOrder } from '@/constants/interfaces'
import OrderForm from '../order_form'
import { MockOrderRepository } from '../_data/mock_order_repository'
import { LoadingSpinner } from '@/components/loading_spinner'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { MenuItemRepository } from '@/app/menu/_data/menu_item_repository'
import { OrderRepository } from '../_data/order_repository'
import { CustomerRepository } from '@/app/customers/_data/customer_repository'
import { EmployeeRepository } from '@/app/employees/_data/employee_repository'

export default function Order({ isEdit, id }: { isEdit: boolean; id: string }) {
  const [order, setOrder] = useState<IOrder | null>(null)
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const [order_, menuItems_, customers_, employees_] = await Promise.all([
      OrderRepository.fetchOrderById(id),
      MenuItemRepository.fetchAllMenuItems(),
      CustomerRepository.fetchAllCustomers(),
      EmployeeRepository.fetchAllEmployees(),
    ])
    const orderWithMenuSelects: IOrder = {
      ...order_,
      menu_selects: (order_?.menu_items ?? []).map((e) => ({
        label: e.itemname,
        value: e.itemid,
      })),
      customer_selects: {
        label: order_.customerid,
        value: order_.customerid,
      },
      employee_selects: {
        label: order_.employeeid,
        value: order_.employeeid,
      },
    }
    console.log('order order ' + JSON.stringify(order_))
    console.log(
      'helo + ' + JSON.stringify(orderWithMenuSelects['menu_selects'])
    )
    setOrder(orderWithMenuSelects)
    setMenuItems(menuItems_)
    setCustomers(customers_)
    setEmployees(employees_)
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
          onSave={(values: IOrder) => {
            const { totalprice, ...rest } = values
            const price = (values.menu_selects ?? [])
              .map((e: any) => e.price)
              .reduce((acc: number, curr: number) => acc + curr, 0)
            const order = { totalprice: price, ...rest }
            OrderRepository.updateOrder(order!.orderid, order).then((_) => {
              router.push(`/${order!.orderid}`)
            })
          }}
          onCancel={() => {
            router.push(`/${order!.orderid}`)
          }}
          FormikForm={OrderForm}
          omitFields={undefined}
          menuItems={menuItems!}
          customers={customers!}
          employees={employees!}
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
          onDelete={() => {
            OrderRepository.deleteOrder(order!.orderid).then((_) => {
              router.push('/')
            })
          }}
          menuItems={menuItems!}
          FormikForm={OrderForm}
          customers={customers!}
          employees={employees!}
        />
      )}
    </Container>
  )
}

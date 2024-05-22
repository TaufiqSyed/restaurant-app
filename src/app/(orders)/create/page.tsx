'use client'

import { Container } from '@/components/container'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { ICustomer, IEmployee, IMenuItem, IOrder } from '@/constants/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { MockOrderRepository } from '../_data/mock_order_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { useState, useEffect } from 'react'
import OrderForm from '../order_form'
import { LoadingSpinner } from '@/components/loading_spinner'
import { MenuItemRepository } from '@/app/menu/_data/menu_item_repository'
import { OrderRepository } from '../_data/order_repository'
import { CustomerRepository } from '@/app/customers/_data/customer_repository'
import { EmployeeRepository } from '@/app/employees/_data/employee_repository'

export default function OrderCreatePage() {
  const emptyOrder = OrderRepository.emptyOrder()
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([])
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const [menuItems_, customers_, employees_] = await Promise.all([
      MenuItemRepository.fetchAllMenuItems(),
      CustomerRepository.fetchAllCustomers(),
      EmployeeRepository.fetchAllEmployees(),
    ])
    setMenuItems(menuItems_)
    setCustomers(customers_)
    setEmployees(employees_)
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
          const { totalprice, ...rest } = values
          const price = (values.menu_selects ?? [])
            .map((e: any) => e.price)
            .reduce((acc: number, curr: number) => acc + curr, 0)
          const order = { totalprice: price, ...rest }
          OrderRepository.createOrder(order).then((_) => {
            router.push(`/${order!.orderid}`)
          })
        }}
        onCancel={() => {
          router.push('/')
        }}
        FormikForm={OrderForm}
        menuItems={menuItems!}
        omitFields={undefined}
        customers={customers!}
        employees={employees!}
      />
    </Container>
  )
}

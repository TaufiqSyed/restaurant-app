'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../../components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../../components/container'
import { IOrder } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { MockOrderRepository } from './_data/mock_order_repository'
import { LoadingSpinner } from '../../components/loading_spinner'

export default function OrdersPage() {
  const [orders, setOrders] = useState<IOrder[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const userStr = localStorage.getItem('user')
    if (userStr == null || userStr == '') {
      router.push('/login')
      return
    }
    MockOrderRepository.fetchAllOrders().then((orders) => {
      setOrders(orders)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/'>
      {orders.map((order) => (
        <DataItem
          key={order.order_id}
          titleField='order_id'
          json={order}
          onClick={(): void => {
            router.push(`/${order.order_id}`)
          }}
          omitFields={['menu_items', 'customer', 'menu_item_ids']}
        />
      ))}
    </Container>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/app/shared_components/data_item_detail'
import { Box, Center, Grid, Spinner } from '@chakra-ui/react'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '@/app/shared_components/container'
import { useEffect, useState } from 'react'
import { IOrder } from '@/constants/interfaces'
import OrderForm from '../order_form'
import { MockOrderRepository } from '../_data/mock_order_repository'
import { LoadingSpinner } from '@/app/shared_components/loading_spinner'

export default function OrderDetailPage() {
  const [order, setOrder] = useState<IOrder | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    MockOrderRepository.fetchOrderById(1).then((order_) => {
      setOrder(order_)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/'>
      <DataItemDetail
        dataHeader='Order Information'
        titleField='order_id'
        json={order!}
        onBack={() => {
          router.push('/')
        }}
        onEdit={() => {
          router.push(`/${order!.order_id}/edit`)
        }}
        FormikForm={OrderForm}
      />
    </Container>
  )
}

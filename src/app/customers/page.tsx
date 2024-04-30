'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../shared_components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../shared_components/container'
import { ICustomer } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { MockCustomerRepository } from './_data/mock_customer_repository'
import { LoadingSpinner } from '../shared_components/loading_spinner'

export default function CustomersPage() {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    MockCustomerRepository.fetchAllCustomers().then((customers) => {
      setCustomers(customers)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/customers'>
      {customers.map((customer) => (
        <DataItem
          key={customer.customer_id}
          titleField='customer_id'
          json={customer}
          onClick={(): void => {
            router.push(`/${customer.customer_id}`)
          }}
        />
      ))}
    </Container>
  )
}

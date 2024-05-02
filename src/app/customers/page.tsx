'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../../components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../../components/container'
import { ICustomer } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { MockCustomerRepository } from './_data/mock_customer_repository'
import { LoadingSpinner } from '../../components/loading_spinner'
import { CustomerRepository } from './_data/customer_repository'

export default function CustomersPage() {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Mock
    CustomerRepository.fetchAllCustomers().then((customers_) => {
      setCustomers(customers_)
      console.log('customer customer ' + customers_)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/customers/'>
      {customers.map((customer) => (
        <DataItem
          key={customer.customerid}
          titleField='customerid'
          json={customer}
          onClick={(): void => {
            router.push(`customers/${customer.customerid}`)
          }}
        />
      ))}
    </Container>
  )
}

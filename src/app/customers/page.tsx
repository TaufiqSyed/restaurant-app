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
import { FrequentCustomer } from '@/components/frequent_customer'

export default function CustomersPage() {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [mostFrequentCustomers, setMostFrequentCustomers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const [customers_, freqs_] = await Promise.all([
      CustomerRepository.fetchAllCustomers(),
      CustomerRepository.mostFrequentCustomers(),
    ])
    setCustomers(customers_)
    setMostFrequentCustomers(freqs_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/customers/'>
      {mostFrequentCustomers.map((e, idx) => (
        <FrequentCustomer
          key={`cust_freq_${e.customerid}`}
          titleField='customerid'
          json={e}
          nth={idx + 1}
          onClick={(): void => {
            router.push(`/customers/${e.customerid}`)
          }}
        />
      ))}
      {customers.map((customer) => (
        <DataItem
          key={customer.customerid}
          titleField='customerid'
          json={customer}
          onClick={(): void => {
            router.push(`/customers/${customer.customerid}`)
          }}
        />
      ))}
    </Container>
  )
}

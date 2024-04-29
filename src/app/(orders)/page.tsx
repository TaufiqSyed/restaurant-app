'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../shared_components/data_item'
import { useRouter } from 'next/navigation'

export default function OrdersPage() {
  const obj = {
    userId: '12345',
    username: 'taufiqs',
    password: 'abcdef',
    isAdmin: 'false',
    position: 'HR Coordinator',
    contactInformation: '9715434534',
    salary: '22550',
  }
  const router = useRouter()
  return (
    <Grid
      position='absolute'
      top='150px'
      w='100%'
      gridTemplateColumns='repeat(auto-fit, minmax(350px, 1fr))'
      gridRowGap='20px'
      gridColumnGap='40px'
      p='0 40px'
    >
      <DataItem
        titleField='username'
        omitFields={['password']}
        json={obj}
        onClick={() => {
          router.push(`/${obj['userId']}`)
        }}
      />
    </Grid>
  )
}

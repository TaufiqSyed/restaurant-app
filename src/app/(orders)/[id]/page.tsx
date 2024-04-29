'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/app/shared_components/data_item_detail'
import { Box, Grid } from '@chakra-ui/react'

export default function OrderDetailPage() {
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
      <DataItemDetail
        datatype='User Information'
        titleField='username'
        omitFields={['password']}
        json={obj}
        onBack={() => {
          router.push(`/${obj['userId']}`)
        }}
        onEdit={() => {
          router.push(`/${obj['userId']}/edit`)
        }}
      />
    </Grid>
  )
}

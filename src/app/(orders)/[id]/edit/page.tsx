'use client'

import { DataItemDetail } from '@/app/shared_components/data_item_detail'
import { DataItemDetailEdit } from '@/app/shared_components/data_item_detail_edit'
import { Box, Grid } from '@chakra-ui/react'
import OrderForm from '../../order_form'

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
      {/* <OrderForm initialValues={{ order_id: '1234', employee_id: '1234' }} /> */}
      <DataItemDetailEdit
        datatype='User Information'
        titleField='username'
        omitFields={['password']}
        json={obj}
        onBack={() => {}}
        onSave={() => {}}
        onCancel={() => {}}
      />
    </Grid>
  )
}

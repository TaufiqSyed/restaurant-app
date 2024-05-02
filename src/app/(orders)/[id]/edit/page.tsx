// 'use client'

import Order from '../order'

// import { DataItemDetail } from '@/app/shared_components/data_item_detail'
// import { DataItemDetailEdit } from '@/app/shared_components/data_item_detail_edit'
// import { Box, Grid } from '@chakra-ui/react'
// import OrderForm from '../../order_form'
// import { useRouter } from 'next/navigation'
// import { MockOrderRepository } from '../../_data/mock_order_repository'
// import { IMenuItem, IOrder } from '@/constants/interfaces'
// import { useState, useEffect } from 'react'
// import { Container } from '@/app/shared_components/container'
// import { LoadingSpinner } from '@/app/shared_components/loading_spinner'
// import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'

// export default function OrderDetailPage() {
//   const [order, setOrder] = useState<IOrder | null>(null)
//   const [menuItems, setMenuItems] = useState<IMenuItem[]>([])
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     init()
//   }, [])

//   const init = async () => {
//     const [order_, menuItems_] = await Promise.all([
//       MockOrderRepository.fetchOrderById(1),
//       MockMenuItemRepository.fetchAllMenuItems(),
//     ])
//     setOrder(order_)
//     setMenuItems(menuItems_)
//     setLoading(false)
//   }

//   if (loading) return <LoadingSpinner />
//   return (
//     <Container root_href='/'>
//       <DataItemDetailEdit
//         dataHeader='Order Information'
//         titleField='order_id'
//         json={order!}
//         onBack={() => {
//           router.push('/')
//         }}
//         onSave={(values: IOrder) => {
//           console.log(values)
//         }}
//         onCancel={() => {
//           router.push(`/${order!.order_id}`)
//         }}
//         FormikForm={OrderForm}
//         omitFields={undefined}
//         menuItems={menuItems!}
//       />
//     </Container>
//   )
// }

export default function OrderDetailEditPage() {
  return <Order isEdit={true} />
}

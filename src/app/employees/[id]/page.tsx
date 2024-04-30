// 'use client'

// import { useRouter } from 'next/navigation'
// import { DataItemDetail } from '@/app/shared_components/data_item_detail'
// import { Box, Grid } from '@chakra-ui/react'
// import { NavigationBar } from '@/components/navigation_bar'
// import { Container } from '@/app/shared_components/container'

// export default function OrderDetailPage() {
//   const obj = {
//     userId: '12345',
//     username: 'taufiqs',
//     password: 'abcdef',
//     isAdmin: 'false',
//     position: 'HR Coordinator',
//     contactInformation: '9715434534',
//     salary: '22550',
//   }
//   const router = useRouter()

//   return (
//     <Container root_href='/'>
//       <DataItemDetail
//         dataHeader='User Information'
//         titleField='username'
//         omitFields={['password']}
//         json={obj}
//         onBack={() => {
//           router.push('/')
//         }}
//         onEdit={() => {
//           router.push(`/${obj['userId']}/edit`)
//         }}
//       />
//     </Container>
//   )
// }

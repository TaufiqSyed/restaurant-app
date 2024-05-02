'use client'
import { Container } from '@/components/container'
import LoginForm from './login_form'
import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  return (
    <Container root_href='/'>
      <Flex flexDir='column' alignItems='center' w='100%'>
        <Box h='100px' />
        <LoginForm
          initialValues={{ email: '', password: '' }}
          viewOnly={false}
          onSubmit={(values: any) => {
            localStorage.setItem(
              'user',
              JSON.stringify({ is_admin: true, user_id: 1 })
            )
            router.push('/')
          }}
        />
      </Flex>
    </Container>
  )
}

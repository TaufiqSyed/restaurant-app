'use client'
import { Container } from '@/components/container'
import LoginForm from './login_form'
import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { LoginBox } from './login_box'

export default function Login() {
  const router = useRouter()
  return (
    <Container root_href='/'>
      <Flex flexDir='column' alignItems='center' w='100%'>
        <LoginBox
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

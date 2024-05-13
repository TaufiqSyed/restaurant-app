'use client'
import { Container } from '@/components/container'
import LoginForm from './login_form'
import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { LoginBox } from './login_box'
import { ApiRoutes } from '@/shared_utils/api_routes'
import axios from 'axios'

export default function Login() {
  const router = useRouter()
  return (
    <Container root_href='/'>
      <Flex flexDir='column' alignItems='center' w='100%'>
        <LoginBox
          onSubmit={(values: any) => {
            axios
              .post(ApiRoutes.login, values)
              .then((res: any) => {
                const resp = res.data
                console.log(JSON.stringify(res))
                console.log(JSON.stringify(resp))
                console.log((resp ?? {})['success'])
                if ((resp ?? {})['success'] !== true) {
                  // if ((res ?? {})['success'] !== true) {
                  alert('Invalid login credentials')
                  return
                }
                localStorage.setItem(
                  'user',
                  JSON.stringify({
                    isadmin: resp['isadmin'],
                    userid: resp['userid'],
                  })
                )
                router.push('/')
              })
              .catch(() => {
                alert('Invalid login credentials')
              })
          }}
        />
      </Flex>
    </Container>
  )
}

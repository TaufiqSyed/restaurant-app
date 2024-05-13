import { Box, Button, Text, Flex, IconButton, Icon } from '@chakra-ui/react'
import LoginForm from './login_form'

export const LoginBox = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  return (
    <Box
      borderRadius='12px'
      bgColor='componentColor'
      position='relative'
      p='48px 32px'
      w='100%'
      h='550px'
    >
      <Box>
        <Flex flexDir='row' w='100%' justifyContent={'space-between'}>
          <Text fontSize='32px' fontWeight='bold' mb='12px'>
            Login
          </Text>
        </Flex>
      </Box>
      <Box fontSize='22px' mt='12px'>
        <LoginForm
          initialValues={{ username: '', password: '' }}
          viewOnly={false}
          onSubmit={onSubmit}
        />
      </Box>
    </Box>
  )
}

import { Flex, Text } from '@chakra-ui/react'
import { Logo } from './logo'

export const NavLogo = () => {
  return (
    <Flex flexDir='row' alignItems='center'>
      <Logo />
      <Text
        fontWeight='bold'
        fontStyle='italic'
        fontSize='20px'
        lineHeight='1'
        mr='50px'
        ml='4px'
        w='75px'
      >
        Bon Appétit
      </Text>
    </Flex>
  )
}

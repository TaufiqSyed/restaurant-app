import { Box, Image } from '@chakra-ui/react'

export const Logo = ({ colorMode }: { colorMode: string }) => (
  // <Box boxSize='sm'>
  <Image src={`/logo-${colorMode}.svg`} alt='Logo' boxSize='55px' />
  // </Box>
)

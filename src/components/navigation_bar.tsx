'use client'

import {
  Box,
  Image,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  MenuGroup,
  FlexProps,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, Icon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'
import { IoPersonCircle, IoChevronDown } from 'react-icons/io5'
import { MdExpandMore, MdPerson, MdSearch } from 'react-icons/md'
import {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react'
import { BsNutFill } from 'react-icons/bs'
import { HrefLink } from './href_link'
import { IUser } from '@/constants/interfaces'
import { useMediaQuery } from '@/shared_utils/use_media_query'
import { componentColor, navbarColor } from '@/constants/colors'
// import '@fontsource/open-sans/700.css'

// interface Props {
//   children: React.ReactNode
// }

const Links = [
  { name: 'Orders', href: '/', adminOnly: false },
  { name: 'Employees', href: '/employees', adminOnly: true },
  { name: 'Customers', href: '/customers', adminOnly: false },
  { name: 'Menu', href: '/menu', adminOnly: false },
]

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return <HrefLink href={href}>{children}</HrefLink>
}

export function NavigationBar({ root_href }: { root_href: string }) {
  // const [isLargerThan700] = useMediaQuery('(min-width: 700px)')
  // const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [navOpen, setNavOpen] = useState(true)
  const [loading, setLoading] = useState(true)

  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    let storedUser = null
    const text = localStorage.getItem('user')
    if (text != null) storedUser = JSON.parse(text) as IUser
    setUser(storedUser)
    setLoading(false)
  }, [])

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = (e: any) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(user))
  }
  if (loading) return <Box></Box>
  return (
    <Box
      className={navOpen ? 'openNavbar' : 'closeNavbar'}
      as='header'
      position='fixed'
      top='0'
      bgColor={navbarColor}
      zIndex='2'
      pt='20px'
      pb='8px'
      w='100%'
      bg='navbar'
      px={4}
      boxShadow='0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    >
      {!!user ? (
        <>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box w='100%' maxW='24px' minW='0' />
              <HrefLink href='/'>
                <Text
                  fontWeight='bold'
                  fontStyle='italic'
                  fontSize='18px'
                  lineHeight='1'
                  mr='50px'
                  w='67px'
                >
                  Bon Appétit
                </Text>
              </HrefLink>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
                justifyContent='space-between'
                w='100%'
                maxW='300px'
                minW='100px'
              >
                {Links.map((link) =>
                  !link.adminOnly || (user?.is_admin ?? false) ? (
                    <NavLink key={link.name} href={link.href}>
                      <Text
                        textDecoration={
                          root_href != link.href ? 'none' : 'underline'
                        }
                      >
                        {link.name}
                      </Text>
                    </NavLink>
                  ) : null
                )}
              </HStack>
            </HStack>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    <Text
                      textDecoration={
                        root_href != link.href ? 'none' : 'underline'
                      }
                    >
                      {link.name}
                    </Text>
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </>
      ) : (
        <>
          <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <HrefLink href='/login' ml='auto'>
                Log In
              </HrefLink>
              <HrefLink href='/register'>Sign Up</HrefLink>
            </Flex>
          </Flex>
        </>
      )}
    </Box>
  )
}

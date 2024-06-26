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
  useColorMode,
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
import { MockOrderRepository } from '@/app/(orders)/_data/mock_order_repository'
import { Logo } from './logo'
import { NavLogo } from './nav_logo'
import { DarkModeSwitch } from './dark_mode_switch'
// import '@fontsource/open-sans/700.css'

// interface Props {
//   children: React.ReactNode
// }

const Links = [
  { name: 'Orders', href: '/', adminOnly: false },
  { name: 'Employees', href: '/employees/', adminOnly: true },
  { name: 'Customers', href: '/customers/', adminOnly: false },
  { name: 'Menu', href: '/menu/', adminOnly: false },
  { name: 'Logs', href: '/logs/', adminOnly: true },
]

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return <HrefLink href={href}>{children}</HrefLink>
}

const hrefToEntityName = (root_href: string) => {
  switch (root_href) {
    case '/':
      return 'Order'
    case '/employees/':
      return 'Employee'
    case '/customers/':
      return 'Customer'
    case '/menu/':
      return 'Menu'
  }
}

const hrefToEntityOnCreate = (root_href: string) => {
  // switch (root_href) {
  //   case '/':
  //     return
  //   case '/employees':
  //     return EmployeeRepository.createEmployee
  //   case '/customers':
  //     return CustomerRepository.create
  //   case '/menu':
  //     return OrderRepository.createOrder
  // }
  return () => {}
}

export function NavigationBar({ root_href }: { root_href: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()
  const [navOpen, setNavOpen] = useState(true)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    let storedUser = null
    const text = localStorage.getItem('user')
    if (text != null && text != '') storedUser = JSON.parse(text) as IUser
    setUser(storedUser)
    setLoading(false)
  }, [])

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = (e: any) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(user))
  }
  // if (loading) return <Box></Box>
  return (
    <Box
      className={navOpen ? 'openNavbar' : 'closeNavbar'}
      as='header'
      position='fixed'
      top='0'
      bgColor='navbarColor'
      zIndex='2'
      pt='20px'
      pb='8px'
      w='100%'
      bg='navbar'
      px={4}
      boxShadow='0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    >
      {!!user ? (
        <Flex flexDir='row' alignItems='center'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'} p='0 56px'>
              <HrefLink href='/'>
                <NavLogo colorMode={colorMode} />
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
                  !link.adminOnly || (user?.isadmin ?? false) ? (
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
          {!isOpen && (
            <Flex ml='auto' mr='50px' flexDir='row' alignItems='center'>
              <DarkModeSwitch />
              {root_href != '/logs/' && (
                <NavLink href={root_href + 'create'}>
                  <Button colorScheme='purple'>
                    Create {hrefToEntityName(root_href)}
                  </Button>
                </NavLink>
              )}
              <Button
                ml='12px'
                onClick={() => {
                  localStorage.removeItem('user')
                  router.push('/login')
                }}
              >
                Log Out
              </Button>
            </Flex>
          )}
        </Flex>
      ) : (
        <>
          <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
            <Box pl='56px'>
              <NavLogo colorMode={colorMode} />
            </Box>
            <Flex
              ml='auto'
              mr='50px'
              h={16}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <HrefLink href='/login' ml='auto'>
                <Button colorScheme='purple'>Log In</Button>
              </HrefLink>
            </Flex>
          </Flex>
        </>
      )}
    </Box>
  )
}

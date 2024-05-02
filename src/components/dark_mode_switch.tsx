import { useColorMode, Switch, IconButton } from '@chakra-ui/react'
import { MdDarkMode } from 'react-icons/md'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      mr='12px'
      position='relative'
      color='purple'
      icon={<MdDarkMode />}
      aria-label='Toggle Dark Mode'
      bgColor={isDark ? '#1b0a1a' : '#ffffff'}
      // isChecked={isDark}
      onClick={toggleColorMode}
    />
  )
}

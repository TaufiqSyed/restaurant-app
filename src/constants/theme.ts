//theme.ts
import { StyleFunctionProps, ThemeConfig, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme(config, {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // bg: mode('#1b0a1a', '#1b0a1a')(props),
        bg: 'background',
      },
    }),
  },
  semanticTokens: {
    colors: {
      // componentColor: { default: '#f7ebfc', _dark: '#260725' }, // #fdf7ff'
      // navbarColor: { default: '#f6e3ff', _dark: '#32012F' }, // f1cef5
      // secondaryColor: { default: '#eddeff', _dark: '#310838' },
      // background: { default: '#d3bfe0', dark: '#1a0a1a' },
      purpleBorder: { default: '#B794F4', _dark: '#702459' },
      componentColor: { default: '#e7dcfa', _dark: '#260725' }, // #fdf7ff'
      navbarColor: { default: '#e8d4fa', _dark: '#32012F' }, // f1cef5
      secondaryColor: { default: '#e9d9fc', _dark: '#310838' },
      background: { default: '#e7cfff', dark: '#1a0a1a' },
    },
  },
})

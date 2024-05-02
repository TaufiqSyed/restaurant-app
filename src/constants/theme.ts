//theme.ts
import { StyleFunctionProps, ThemeConfig, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  // initialColorMode: 'dark',
  // useSystemColorMode: false,
}

export const theme = extendTheme(config, {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // bg: mode('#1b0a1a', '#1b0a1a')(props),
        bg: mode('#d3bfe0', '#1b0a1a')(props),
      },
    }),
  },
  semanticTokens: {
    colors: {
      // componentColor: { default: '#ffffff', _dark: '#260725' }, // f7cdf5
      componentColor: { default: '#f7ebfc', _dark: '#260725' }, // #fdf7ff'
      navbarColor: { default: '#f6e3ff', _dark: '#32012F' }, // f1cef5
      secondaryColor: { default: '#eddeff', _dark: '#310838' },
      background: { default: '#d3bfe0', dark: '#1a0a1a' },
    },
  },
})

import { DarkMode, ColorModeScript, theme } from '@chakra-ui/react'
import Providers from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Bon Appétit</title>
        <link rel='icon' type='image/x-icon' href='/logo-dark.svg' />
      </head>
      <body>
        <DarkMode>
          <Providers>{children}</Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </DarkMode>
      </body>
    </html>
  )
}

import { NavigationBar } from '@/components/navigation_bar'
import { BoxProps, Grid } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const Container = ({
  root_href,
  children,
  ...props
}: {
  root_href: string
  children: ReactNode
} & BoxProps) => {
  return (
    <Grid
      position='absolute'
      w='100%'
      gridTemplateColumns='repeat(auto-fit, minmax(350px, 1fr))'
      gridRowGap='20px'
      gridColumnGap='40px'
      p='150px 40px 50px 40px'
      // bg='background'
      minH='100vh'
      {...props}
    >
      <NavigationBar root_href={root_href} />
      {children}
    </Grid>
  )
}

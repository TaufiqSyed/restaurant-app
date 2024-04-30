import { NavigationBar } from '@/components/navigation_bar'
import { Grid } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const Container = ({
  root_href,
  children,
}: {
  root_href: string
  children: ReactNode
}) => {
  return (
    <Grid
      position='absolute'
      top='150px'
      w='100%'
      gridTemplateColumns='repeat(auto-fit, minmax(350px, 1fr))'
      gridRowGap='20px'
      gridColumnGap='40px'
      p='0 40px'
    >
      <NavigationBar root_href={root_href} />
      {children}
    </Grid>
  )
}

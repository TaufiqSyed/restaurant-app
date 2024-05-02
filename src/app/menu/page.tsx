'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../../components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../../components/container'
import { IMenuItem } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { LoadingSpinner } from '../../components/loading_spinner'
import { MockMenuItemRepository } from './_data/mock_menu_item_repository'
import { MenuItemRepository } from './_data/menu_item_repository'

export default function MenuItemsPage() {
  const [menuitems, setMenuItems] = useState<IMenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Mock
    MenuItemRepository.fetchAllMenuItems().then((menuitems) => {
      setMenuItems(menuitems)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/menu/'>
      {menuitems.map((menuitem) => (
        <DataItem
          key={menuitem.itemid}
          titleField='itemid'
          json={menuitem}
          onClick={(): void => {
            router.push(`/menu/${menuitem.itemid}`)
          }}
        />
      ))}
    </Container>
  )
}

'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../shared_components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../shared_components/container'
import { IMenuItem } from '@/constants/interfaces'
import { useState, useEffect } from 'react'
import { LoadingSpinner } from '../shared_components/loading_spinner'
import { MockMenuItemRepository } from './_data/mock_menu_item_repository'

export default function MenuItemsPage() {
  const [menuitems, setMenuItems] = useState<IMenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    MockMenuItemRepository.fetchAllMenuItems().then((menuitems) => {
      setMenuItems(menuitems)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/menu'>
      {menuitems.map((menuitem) => (
        <DataItem
          key={menuitem.item_id}
          titleField='item_id'
          json={menuitem}
          onClick={(): void => {
            router.push(`/${menuitem.item_id}`)
          }}
        />
      ))}
    </Container>
  )
}

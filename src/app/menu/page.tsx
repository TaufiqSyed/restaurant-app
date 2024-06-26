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
import { MostBoughtItems } from '@/components/most_bought_items'

export default function MenuItemsPage() {
  const [menuitems, setMenuItems] = useState<IMenuItem[]>([])
  const [mostBoughtItems, setMostBoughtItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Mock
    init()
  }, [])

  const init = async () => {
    const [items_, freqs_] = await Promise.all([
      MenuItemRepository.fetchAllMenuItems(),
      MenuItemRepository.mostBoughtItems(),
    ])
    setMenuItems(items_)
    setMostBoughtItems(freqs_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/menu/'>
      {mostBoughtItems.map((e, idx) => (
        <MostBoughtItems
          key={`item_freq_${e.menu_itemid}`}
          titleField='itemid'
          json={e}
          nth={idx + 1}
          onClick={(): void => {
            router.push(`/menu/${e.menu_itemid}`)
          }}
        />
      ))}
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

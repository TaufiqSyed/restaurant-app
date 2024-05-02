'use client'

import { useParams } from 'next/navigation'
import MenuItem from './menu_item'

export default function MenuItemDetailPage() {
  const { id } = useParams<{ id: string }>()

  return <MenuItem isEdit={false} id={id} />
}

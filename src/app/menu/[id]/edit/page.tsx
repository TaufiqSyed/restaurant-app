'use client'

import { useParams } from 'next/navigation'
import MenuItem from '../menu_item'

export default function MenuItemDetailEditPage() {
  const { id } = useParams<{ id: string }>()

  return <MenuItem isEdit={true} id={id} />
}

'use client'

import { useParams } from 'next/navigation'
import Order from '../order'

export default function OrderDetailEditPage() {
  const { id } = useParams<{ id: string }>()

  return <Order isEdit={true} id={id} />
}

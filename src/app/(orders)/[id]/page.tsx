'use client'

import { useParams } from 'next/navigation'
import Order from './order'

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>()

  return <Order isEdit={false} id={id} />
}

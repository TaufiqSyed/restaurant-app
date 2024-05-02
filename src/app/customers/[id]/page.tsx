'use client'

import { useParams } from 'next/navigation'
import Customer from './customer'

export default function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>()

  return <Customer isEdit={false} id={id} />
}

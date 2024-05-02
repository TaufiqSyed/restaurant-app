'use client'

import { useParams } from 'next/navigation'
import Customer from '../customer'

export default function CustomerDetailEditPage() {
  const { id } = useParams<{ id: string }>()

  return <Customer isEdit={true} id={id} />
}

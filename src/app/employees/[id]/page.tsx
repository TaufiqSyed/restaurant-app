'use client'

import { useParams } from 'next/navigation'
import Employee from './employee'

export default function EmployeeDetailPage() {
  const { id } = useParams<{ id: string }>()

  return <Employee isEdit={false} id={id} />
}

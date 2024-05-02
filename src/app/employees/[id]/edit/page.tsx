'use client'

import { useParams } from 'next/navigation'
import Employee from '../employee'

export default function EmployeeDetailEditPage() {
  const { id } = useParams<{ id: string }>()

  return <Employee isEdit={true} id={id} />
}

'use client'

import { DataItem } from '../shared_components/data_item'
import { useRouter } from 'next/navigation'
import { Container } from '../shared_components/container'

export default function OrdersPage() {
  const obj1 = {
    userId: '12345',
    username: 'taufiqs',
    password: 'abcdef',
    isAdmin: 'false',
    position: 'HR Coordinator',
    contactInformation: '9715434534',
    salary: '22550',
  }
  const obj2 = {
    userId: '34567',
    username: 'samads',
    password: 'abcdef',
    isAdmin: 'true',
    position: 'HR Coordinator',
    contactInformation: '9715434534',
    salary: '22550',
  }
  const obj3 = {
    userId: '67899',
    username: 'oussamaj',
    password: 'abcdef',
    isAdmin: 'false',
    position: 'HR Coordinator',
    contactInformation: '9715434534',
    salary: '22550',
  }
  const obj4 = {
    userId: '78994',
    username: 'chaitanyan',
    password: 'abcdef',
    isAdmin: 'false',
    position: 'HR Coordinator',
    contactInformation: '9715434534',
    salary: '22550',
  }
  const obj5 = {
    userId: '99345',
    username: 'dheemang',
    password: 'abcdef',
    isAdmin: 'false',
    position: 'HR Coordinator',
    contactInformation: '9715434534',
    salary: '22550',
  }
  const router = useRouter()
  return (
    <Container root_href='/'>
      <DataItem
        titleField='username'
        omitFields={['password']}
        json={obj1}
        onClick={() => {
          router.push(`/${obj1['userId']}`)
        }}
      />
      <DataItem
        titleField='username'
        omitFields={['password']}
        json={obj2}
        onClick={() => {
          router.push(`/${obj2['userId']}`)
        }}
      />
      <DataItem
        titleField='username'
        omitFields={['password']}
        json={obj3}
        onClick={() => {
          router.push(`/${obj3['userId']}`)
        }}
      />
      <DataItem
        titleField='username'
        omitFields={['password']}
        json={obj4}
        onClick={() => {
          router.push(`/${obj4['userId']}`)
        }}
      />
      <DataItem
        titleField='username'
        omitFields={['password']}
        json={obj5}
        onClick={() => {
          router.push(`/${obj5['userId']}`)
        }}
      />
    </Container>
  )
}

'use client'

import { Container } from '@/components/container'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { IMenuItem } from '@/constants/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { MockMenuItemRepository } from '../_data/mock_menu_item_repository'
import MenuItemForm from '../menu_item_form'
import { MenuItemRepository } from '../_data/menu_item_repository'

export default function MenuItemCreatePage() {
  const emptyMenuItem = MockMenuItemRepository.emptyMenuItem()
  const router = useRouter()

  return (
    <Container root_href='/menu/'>
      <DataItemDetailEdit
        dataHeader='Create Menu Item'
        json={emptyMenuItem!}
        onBack={() => {
          router.push('/menu')
        }}
        onSave={(values: IMenuItem) => {
          // console.log(values)
          console.log(values)
          MenuItemRepository.createMenuItem(values).then((_) => {
            router.push('/menu')
          })
        }}
        onCancel={() => {
          router.push('/menu')
        }}
        FormikForm={MenuItemForm}
        omitFields={undefined}
      />
    </Container>
  )
}

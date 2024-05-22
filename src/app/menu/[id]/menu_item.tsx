'use client'

import { useRouter } from 'next/navigation'
import { DataItemDetail } from '@/components/data_item_detail'
import { Container } from '@/components/container'
import { useEffect, useState } from 'react'
import { IMenuItem } from '@/constants/interfaces'
import MenuItemForm from '../menu_item_form'
import { LoadingSpinner } from '@/components/loading_spinner'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { DataItemDetailEdit } from '@/components/data_item_detail_edit'
import { MenuItemRepository } from '../_data/menu_item_repository'

export default function MenuItem({
  isEdit,
  id,
}: {
  isEdit: boolean
  id: string
}) {
  const [menuitem, setMenuItem] = useState<IMenuItem | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const menuitem_ = await // Mock
    MenuItemRepository.fetchMenuItemById(id)
    setMenuItem(menuitem_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/menu/'>
      {isEdit ? (
        <DataItemDetailEdit
          dataHeader='MenuItem Information'
          // titleField='menuitemid'
          json={menuitem!}
          onBack={() => {
            router.push('/menu/')
          }}
          onSave={(values: IMenuItem) => {
            MenuItemRepository.updateMenuItem(values!.itemid, values).then(
              (_) => {
                router.push(`/menu/${values!.itemid}`)
              }
            )
          }}
          onCancel={() => {
            router.push(`/menu/${menuitem!.itemid}`)
          }}
          FormikForm={MenuItemForm}
          omitFields={undefined}
        />
      ) : (
        <DataItemDetail
          dataHeader='Menu Information'
          // titleField='menuitemid'
          json={menuitem!}
          onBack={() => {
            router.push('/menu')
          }}
          onEdit={() => {
            router.push(`/menu/${menuitem!.itemid}/edit`)
          }}
          onDelete={() => {
            MenuItemRepository.deleteMenuItem(menuitem!.itemid).then((_) => {
              router.push('/menu')
            })
          }}
          FormikForm={MenuItemForm}
        />
      )}
    </Container>
  )
}

import { IApiResponse, IMenuItem } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import { ConvertKeysToLowerCase } from '@/shared_utils/convert_keys_to_lowercase'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'
import axios, { AxiosResponse } from 'axios'

// itemid: number
// itemname: string
// description?: string
// price: number
// category?: string

export class MenuItemRepository {
  static emptyMenuItem = (): IMenuItem => {
    return {
      itemid: '',
      itemname: '',
      description: '',
      price: '',
      category: '',
    }
  }
  static cleanServerData = (data: any): IMenuItem => {
    return ConvertKeysToLowerCase(data)
  }

  static fetchAllMenuItems = async (): Promise<IMenuItem[]> => {
    const menuitems_ = (await axios.get(ApiRoutes.menuItems)).data
    const menuitems = menuitems_.map(MenuItemRepository.cleanServerData)
    return menuitems
  }
  static fetchMenuItemById = async (id: string): Promise<IMenuItem> => {
    const menuitem_ = (await axios.get(ApiRoutes.menuItemById(id))).data[0]
    console.log('MENU ITEM')
    console.log(JSON.stringify(menuitem_))
    const menuitem = MenuItemRepository.cleanServerData(menuitem_)
    return menuitem
  }
  static createMenuItem = async (
    menuitem: IMenuItem
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.post(ApiRoutes.menuItems, menuitem)
    if (resp.status == 200 || resp.status == 201) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
        message: 'Invalid Data',
      }
    }
  }
  static updateMenuItem = async (
    id: string,
    menuitem: IMenuItem
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.put(
      ApiRoutes.menuItemById(id),
      menuitem
    )
    if (resp.status == 200 || resp.status == 201) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
        message: 'Invalid Data',
      }
    }
  }
  static deleteMenuItem = async (
    menuitem_id: string
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.delete(
      ApiRoutes.menuItemById(menuitem_id)
    )
    if (resp.status == 200 || resp.status == 201) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
        message: 'Invalid Data',
      }
    }
  }
  static mostBoughtItems = async (): Promise<IMenuItem[]> => {
    const menuitems_ = (await axios.get(ApiRoutes.mostBoughtItems)).data
    const menuitems = menuitems_.map(ConvertKeysToLowerCase)
    return menuitems
  }
}

import { IApiResponse, IMenuItem } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
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

  static fetchAllMenuItems = async (): Promise<IMenuItem[]> => {
    const menuitems = (await axios.get(ApiRoutes.menuItems)).data
    return menuitems
  }
  static fetchMenuItemById = async (id: string): Promise<IMenuItem> => {
    const menuitem = (await axios.get(ApiRoutes.menuItemById(id))).data
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
    menuitem: IMenuItem
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.put(ApiRoutes.menuItems, menuitem)
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
}

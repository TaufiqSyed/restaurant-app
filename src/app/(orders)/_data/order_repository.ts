import { MockCustomerRepository } from '@/app/customers/_data/mock_customer_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { IApiResponse, IOrder, IPartialOrder } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import {
  randomDate,
  randomInteger,
  randomName,
} from '@/shared_utils/mock_random_data'
import axios, { AxiosResponse } from 'axios'

// orderid: number
// userid: number
// customerid: string
// tablenumber: number
// orderdate: Date
// total_price: number
// menu_items?: IMenuItem[]
// customer?: ICustomer
// menu_itemids?: number[]

export class OrderRepository {
  static emptyOrder = (): IPartialOrder => {
    return {
      orderid: '',
      userid: '',
      customerid: '',
      tablenumber: '',
      orderdate: '',
      total_price: '',
      menu_items: [],
      menu_itemids: [],
      customer: undefined,
    }
  }
  static fetchAllOrders = async (): Promise<IOrder[]> => {
    const orders = (await axios.get(ApiRoutes.orders)).data
    return orders
  }
  static fetchOrderById = async (id: string): Promise<IOrder> => {
    const order = (await axios.get(ApiRoutes.orderById(id))).data
    return order
  }
  static createOrder = async (order: IOrder): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.post(ApiRoutes.orders, order)
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
  static updateOrder = async (order: IOrder): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.put(ApiRoutes.orders, order)
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

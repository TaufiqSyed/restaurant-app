import { MockCustomerRepository } from '@/app/customers/_data/mock_customer_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { IApiResponse, IOrder } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import { ConvertKeysToLowerCase } from '@/shared_utils/convert_keys_to_lowercase'
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
  static emptyOrder = (): IOrder => {
    return {
      orderid: '',
      employeeid: '',
      customerid: '',
      tablenumber: '',
      orderdate: '',
      totalprice: '',
      menu_items: [],
      menu_itemids: [],
      customer: undefined,
    }
  }
  static cleanServerData = (data: any): IOrder => {
    const { orderdate, ...rest } = ConvertKeysToLowerCase(data)
    return {
      ...rest,
      orderdate: new Date(orderdate),
    }
  }
  static fetchAllOrders = async (): Promise<IOrder[]> => {
    const orders_ = (await axios.get(ApiRoutes.orders)).data
    const orders = orders_.map(OrderRepository.cleanServerData)
    return orders
  }
  static fetchOrderById = async (id: string): Promise<IOrder> => {
    const order_ = (await axios.get(ApiRoutes.orderById(id))).data
    const order = OrderRepository.cleanServerData(order_)
    return order
  }
  static createOrder = async (order: IOrder): Promise<IApiResponse> => {
    order.menu_itemids = (order.menu_selects ?? []).map((e) => e['value'])
    console.log(JSON.stringify(order))
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

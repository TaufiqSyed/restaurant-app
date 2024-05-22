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
      customer_selects: undefined,
      employee_selects: undefined,
      customer: undefined,
    }
  }
  static cleanServerData = (data: any): IOrder => {
    const menu_items_ = data['menu_items']
    console.log(menu_items_)
    console.log('raw data ' + JSON.stringify(data))
    const { orderdate, customer_customerid, menu_items, ...rest } =
      ConvertKeysToLowerCase(data)
    const updatedDate = new Date(orderdate)
    const resp = {
      orderdate: updatedDate,
      customerid: customer_customerid,
      menu_items: menu_items_,
      ...rest,
    }
    console.log('hello hello ' + JSON.stringify(resp))
    return resp
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
  static createOrder = async (order_: IOrder): Promise<IApiResponse> => {
    const menu_itemids_ = (order_.menu_selects ?? []).map((e) => e.value)
    const customerid_ = order_.customer_selects!.value
    const employeeid_ = order_.employee_selects!.value
    const {
      menu_selects,
      customer_selects,
      employee_selects,
      customerid,
      employeeid,
      menu_itemids,
      ...rest
    } = order_
    const order = {
      customerid: customerid_,
      employeeid: employeeid_,
      menu_itemids: menu_itemids_,
      ...rest,
    }
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
  static updateOrder = async (
    id: string,
    order_: IOrder
  ): Promise<IApiResponse> => {
    const menu_itemids_ = (order_.menu_selects ?? []).map((e) => e.value)
    const customerid_ = order_.customer_selects!.value
    const employeeid_ = order_.employee_selects!.value
    const {
      menu_selects,
      customer_selects,
      employee_selects,
      customerid,
      employeeid,
      menu_itemids,
      ...rest
    } = order_
    const order = {
      customerid: customerid_,
      employeeid: employeeid_,
      menu_itemids: menu_itemids_,
      ...rest,
    }
    console.log('44 ' + JSON.stringify(order))
    const resp: AxiosResponse = await axios.put(ApiRoutes.orderById(id), order)
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
  static deleteOrder = async (order_id: string): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.delete(
      ApiRoutes.orderById(order_id)
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
}

import { MockCustomerRepository } from '@/app/customers/_data/mock_customer_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { IApiResponse, IOrder, IPartialOrder } from '@/constants/interfaces'
import {
  randomDate,
  randomInteger,
  randomName,
} from '@/shared_utils/mock_random_data'

// orderid: number
// employeeid: number
// customerid: string
// tablenumber: number
// orderdate: Date
// total_price: number
// menu_items?: IMenuItem[]
// customer?: ICustomer
// menu_itemids?: number[]

export class MockOrderRepository {
  static emptyOrder = (): IPartialOrder => {
    return {
      orderid: '',
      employeeid: '',
      customerid: '',
      tablenumber: '',
      orderdate: '',
      total_price: '',
      menu_items: [],
      menu_itemids: [],
      customer: undefined,
    }
  }
  static generateMockOrder = (): IOrder => {
    const menu_items = [
      MockMenuItemRepository.generateMockMenuItem(),
      MockMenuItemRepository.generateMockMenuItem(),
      MockMenuItemRepository.generateMockMenuItem(),
    ]
    const menu_itemids = menu_items.map((e) => e.itemid)
    return {
      orderid: randomName(),
      employeeid: randomName(),
      customerid: randomName(),
      tablenumber: randomInteger(),
      orderdate: randomDate(),
      total_price: randomInteger(),
      menu_items,
      menu_itemids,
      customer: MockCustomerRepository.generateMockCustomer(),
    }
  }
  static fetchAllOrders = async (): Promise<IOrder[]> => {
    let orders = []
    for (let i = 0; i < 20; i++)
      orders.push(MockOrderRepository.generateMockOrder())
    return orders
  }
  static fetchOrderById = async (id: number): Promise<IOrder> => {
    return MockOrderRepository.generateMockOrder()
  }
  static createOrder = async (order: IOrder): Promise<IApiResponse> => {
    return {
      success: true,
    }
    return {
      success: false,
      message: 'Invalid Customer ID',
    }
  }
  static updateOrder = async (order: IOrder): Promise<IApiResponse> => {
    return {
      success: true,
    }
    return {
      success: false,
      message: 'Invalid Customer ID',
    }
  }
}

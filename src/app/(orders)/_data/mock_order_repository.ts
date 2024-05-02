import { MockCustomerRepository } from '@/app/customers/_data/mock_customer_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { IApiResponse, IOrder, IPartialOrder } from '@/constants/interfaces'
import {
  randomDate,
  randomInteger,
  randomName,
} from '@/shared_utils/mock_random_data'

// order_id: number
// employee_id: number
// customer_id: string
// table_number: number
// order_date: Date
// total_price: number
// menu_items?: IMenuItem[]
// customer?: ICustomer
// menu_item_ids?: number[]

export class MockOrderRepository {
  static emptyOrder = (): IPartialOrder => {
    return {
      order_id: '',
      employee_id: '',
      customer_id: '',
      table_number: '',
      order_date: '',
      total_price: '',
      menu_items: [],
      menu_item_ids: [],
      customer: undefined,
    }
  }
  static generateMockOrder = (): IOrder => {
    const menu_items = [
      MockMenuItemRepository.generateMockMenuItem(),
      MockMenuItemRepository.generateMockMenuItem(),
      MockMenuItemRepository.generateMockMenuItem(),
    ]
    const menu_item_ids = menu_items.map((e) => e.item_id)
    return {
      order_id: randomName(),
      employee_id: randomName(),
      customer_id: randomName(),
      table_number: randomInteger(),
      order_date: randomDate(),
      total_price: randomInteger(),
      menu_items,
      menu_item_ids,
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

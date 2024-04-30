import { MockCustomerRepository } from '@/app/customers/_data/mock_customer_repository'
import { MockMenuItemRepository } from '@/app/menu/_data/mock_menu_item_repository'
import { IOrder } from '@/constants/interfaces'
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
  static generateMockOrder = () => {
    return {
      order_id: randomInteger(),
      employee_id: randomInteger(),
      customer_id: randomInteger(),
      table_number: randomInteger(),
      order_date: randomDate(),
      total_price: randomInteger(),
      menu_items: [
        MockMenuItemRepository.generateMockMenuItem(),
        MockMenuItemRepository.generateMockMenuItem(),
        MockMenuItemRepository.generateMockMenuItem(),
      ],
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
}

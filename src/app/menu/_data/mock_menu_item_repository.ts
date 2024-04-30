import { IMenuItem } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// item_id: number
// item_name: string
// description?: string
// price: number
// category?: string

export class MockMenuItemRepository {
  static generateMockMenuItem = (): IMenuItem => {
    return {
      item_id: randomInteger(),
      item_name: randomName(),
      description: randomName(),
      price: randomInteger(),
      category: randomName(),
    }
  }
  static fetchAllMenuItems = async (): Promise<IMenuItem[]> => {
    let menuitems = []
    for (let i = 0; i < 20; i++)
      menuitems.push(MockMenuItemRepository.generateMockMenuItem())
    return menuitems
  }
  static fetchMenuItemById = async (id: number): Promise<IMenuItem> => {
    return MockMenuItemRepository.generateMockMenuItem()
  }
}
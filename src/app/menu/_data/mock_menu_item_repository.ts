import { IMenuItem } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// itemid: number
// itemname: string
// description?: string
// price: number
// category?: string

export class MockMenuItemRepository {
  static emptyMenuItem = (): IMenuItem => {
    return {
      itemid: '',
      itemname: '',
      description: '',
      price: '',
      category: '',
    }
  }
  static generateMockMenuItem = (): IMenuItem => {
    return {
      itemid: randomName(),
      itemname: randomName(),
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
  static fetchMenuItemById = async (id: string): Promise<IMenuItem> => {
    return MockMenuItemRepository.generateMockMenuItem()
  }
}

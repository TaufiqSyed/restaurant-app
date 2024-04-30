import { ICustomer } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// customer_id: number
// name: string
// phone?: string
// email?: string

export class MockCustomerRepository {
  static generateMockCustomer = (): ICustomer => {
    return {
      customer_id: randomInteger(),
      name: randomName(),
      phone: randomInteger().toString(),
      email: randomName(),
    }
  }
  static fetchAllCustomers = async (): Promise<ICustomer[]> => {
    let customers = []
    for (let i = 0; i < 20; i++)
      customers.push(MockCustomerRepository.generateMockCustomer())
    return customers
  }
  static fetchCustomerById = async (id: number): Promise<ICustomer> => {
    return MockCustomerRepository.generateMockCustomer()
  }
}

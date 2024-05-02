import { ICustomer } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// customerid: number
// name: string
// contact_information?: string
// email?: string

export class MockCustomerRepository {
  static emptyCustomer = (): ICustomer => {
    return {
      customerid: '',
      name: '',
      contact_information: '',
      email: '',
    }
  }
  static generateMockCustomer = (): ICustomer => {
    return {
      customerid: randomName(),
      name: randomName(),
      contact_information: randomInteger().toString(),
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

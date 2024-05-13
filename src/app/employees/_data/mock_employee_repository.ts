import { IEmployee } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// userid: number
// username: string
// isadmin: boolean
// name: string
// position: string
// contact_information: string
// salary: number
// password?: string

export class MockEmployeeRepository {
  static emptyEmployee = (): IEmployee => {
    return {
      userid: randomName(),
      username: randomName(),
      isadmin: false,
      name: randomName(),
      position: randomName(),
      contact_information: randomInteger().toString(),
      salary: randomInteger(),
      mgr: '',
    }
  }
  static generateMockEmployee = (): IEmployee => {
    return {
      userid: randomName(),
      username: randomName(),
      isadmin: false,
      name: randomName(),
      position: randomName(),
      contact_information: randomInteger().toString(),
      salary: randomInteger(),
      mgr: randomName(),
    }
  }
  static fetchAllEmployees = async (): Promise<IEmployee[]> => {
    let employees = []
    for (let i = 0; i < 20; i++)
      employees.push(MockEmployeeRepository.generateMockEmployee())
    return employees
  }
  static fetchEmployeeById = async (id: number): Promise<IEmployee> => {
    return MockEmployeeRepository.generateMockEmployee()
  }
}

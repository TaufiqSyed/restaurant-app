import { IEmployee } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// employeeid: number
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
      employeeid: randomName(),
      username: randomName(),
      isadmin: false,
      name: randomName(),
      position: randomName(),
      contact_information: randomInteger().toString(),
      salary: randomInteger(),
    }
  }
  static generateMockEmployee = (): IEmployee => {
    return {
      employeeid: randomName(),
      username: randomName(),
      isadmin: false,
      name: randomName(),
      position: randomName(),
      contact_information: randomInteger().toString(),
      salary: randomInteger(),
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

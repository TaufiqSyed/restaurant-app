import { IEmployee } from '@/constants/interfaces'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'

// employee_id: number
// username: string
// is_admin: boolean
// name: string
// position: string
// phone: string
// salary: number
// password?: string

export class MockEmployeeRepository {
  static emptyEmployee = (): IEmployee => {
    return {
      employee_id: randomName(),
      username: randomName(),
      is_admin: false,
      name: randomName(),
      position: randomName(),
      phone: randomInteger().toString(),
      salary: randomInteger(),
    }
  }
  static generateMockEmployee = (): IEmployee => {
    return {
      employee_id: randomName(),
      username: randomName(),
      is_admin: false,
      name: randomName(),
      position: randomName(),
      phone: randomInteger().toString(),
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

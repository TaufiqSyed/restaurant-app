import { IApiResponse, IEmployee } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'
import axios, { AxiosResponse } from 'axios'

// employeeid: number
// username: string
// isadmin: boolean
// name: string
// position: string
// contact_information: string
// salary: number
// password?: string

export class EmployeeRepository {
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
  static fetchAllEmployees = async (): Promise<IEmployee[]> => {
    const employees = (await axios.get(ApiRoutes.employees)).data
    return employees
  }
  static fetchEmployeeById = async (id: string): Promise<IEmployee> => {
    const employee = (await axios.get(ApiRoutes.employeeById(id))).data
    return employee
  }
  static createEmployee = async (
    employee: IEmployee
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.post(ApiRoutes.employees, employee)
    if (resp.status == 200 || resp.status == 201) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
        message: 'Invalid Data',
      }
    }
  }
  static updateEmployee = async (
    employee: IEmployee
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.put(ApiRoutes.employees, employee)
    if (resp.status == 200 || resp.status == 201) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
        message: 'Invalid Data',
      }
    }
  }
}

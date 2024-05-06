import { IApiResponse, IEmployee } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import { ConvertKeysToLowerCase } from '@/shared_utils/convert_keys_to_lowercase'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'
import axios, { AxiosResponse } from 'axios'

// userid: number
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
      userid: '',
      username: '',
      isadmin: false,
      name: '',
      position: '',
      contact_information: '',
      salary: 0,
    }
  }
  static fetchAllEmployees = async (): Promise<IEmployee[]> => {
    let employees_: any[] = (await axios.get(ApiRoutes.employees)).data
    console.log('a ' + JSON.stringify(employees_))
    employees_ = employees_.map((e) => ConvertKeysToLowerCase(e))
    console.log('b ' + JSON.stringify(employees_))
    employees_ = employees_.map((e) => ({
      mgr: e['USER_EMPLOYEE_USERID'],
      ...e,
    }))
    console.log('c ' + JSON.stringify(employees_))
    const employees = employees_.map(
      ({ USER_EMPLOYEE_USERID, ...rest }) => rest
    )
    console.log('d ' + JSON.stringify(employees))
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

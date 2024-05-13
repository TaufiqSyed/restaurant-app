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
      mgr: '',
    }
  }
  static cleanServerData = (data: any): IEmployee => {
    const { user_employee_userid, ...rest } = ConvertKeysToLowerCase(data)
    return {
      mgr: user_employee_userid,
      isadmin: rest.isadmin == 'T',
      ...rest,
    }
  }
  static toServerData = (emp: IEmployee): any => {
    return { ...emp, isadmin: emp.isadmin ? 'T' : 'F' }
  }
  static fetchAllEmployees = async (): Promise<IEmployee[]> => {
    const employees_: any[] = (await axios.get(ApiRoutes.employees)).data
    const employees = employees_.map(EmployeeRepository.cleanServerData)
    console.log(JSON.stringify(employees))
    return employees
  }
  static fetchEmployeeById = async (id: string): Promise<IEmployee> => {
    const employee_: any = (await axios.get(ApiRoutes.employeeById(id))).data[0]
    console.log('employee_ ' + JSON.stringify(employee_))
    const employee = EmployeeRepository.cleanServerData(employee_)
    console.log('employee ' + JSON.stringify(employee))
    return employee
  }
  static createEmployee = async (
    employee: IEmployee
  ): Promise<IApiResponse> => {
    console.log('employee = ' + JSON.stringify(employee))
    const employee_ = EmployeeRepository.toServerData(employee)
    console.log('employee_ = ' + JSON.stringify(employee_))
    const resp: AxiosResponse = await axios.post(ApiRoutes.employees, employee_)
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
    const employee_ = EmployeeRepository.toServerData(employee)
    const resp: AxiosResponse = await axios.put(ApiRoutes.employees, employee_)
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
  static deleteEmployee = async (id: string): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.delete(ApiRoutes.employeeById(id))
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
  static employeeWithMostOrders = async (): Promise<any> => {
    const employee_ = (await axios.get(ApiRoutes.employeeWithMostOrders))
      .data[0]
    const employee = ConvertKeysToLowerCase(employee_)
    return employee
  }
}

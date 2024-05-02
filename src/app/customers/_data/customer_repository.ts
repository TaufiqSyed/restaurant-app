import { IApiResponse, ICustomer } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import { randomInteger, randomName } from '@/shared_utils/mock_random_data'
import axios, { AxiosResponse } from 'axios'

// customerid: number
// name: string
// contact_information?: string
// email?: string

export class CustomerRepository {
  static emptyCustomer = (): ICustomer => {
    return {
      customerid: '',
      name: '',
      contact_information: '',
      email: '',
    }
  }
  static fetchAllCustomers = async (): Promise<ICustomer[]> => {
    const customers = (await axios.get(ApiRoutes.customers)).data
    return customers
  }
  static fetchCustomerById = async (id: string): Promise<ICustomer> => {
    const customer = (await axios.get(ApiRoutes.customerById(id))).data
    return customer
  }
  static createCustomer = async (
    customer: ICustomer
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.post(ApiRoutes.customers, customer)
    console.log(resp)
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
  static updateCustomer = async (
    customer: ICustomer
  ): Promise<IApiResponse> => {
    const resp: AxiosResponse = await axios.put(ApiRoutes.customers, customer)
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

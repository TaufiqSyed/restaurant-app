import { IApiResponse, ICustomer } from '@/constants/interfaces'
import { ApiRoutes } from '@/shared_utils/api_routes'
import { ConvertKeysToLowerCase } from '@/shared_utils/convert_keys_to_lowercase'
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
  static cleanServerData = (data: any): ICustomer => {
    return ConvertKeysToLowerCase(data)
  }
  static fetchAllCustomers = async (): Promise<ICustomer[]> => {
    const customers_ = (await axios.get(ApiRoutes.customers)).data
    const customers = customers_.map(CustomerRepository.cleanServerData)
    return customers
  }
  static fetchCustomerById = async (id: string): Promise<ICustomer> => {
    const customer_ = (await axios.get(ApiRoutes.customerById(id))).data
    const customer = CustomerRepository.cleanServerData(customer_)
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
  static mostFrequentCustomers = async (): Promise<any[]> => {
    const customers_ = (await axios.get(ApiRoutes.mostFrequentCustomers)).data

    const customers = customers_.map((e: any) => {
      const { customer_customerid, occurrence_count, ...rest } =
        ConvertKeysToLowerCase(e)
      return {
        customerid: customer_customerid,
        '# of visits': occurrence_count,
        ...rest,
      }
    })
    // const customers = customers_.map(CustomerRepository.cleanServerData)
    return customers
  }
}

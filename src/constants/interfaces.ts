export interface IUser {
  is_admin: boolean
  user_id: string
}

export interface IEmployee {
  employee_id: number
  username: string
  is_admin: boolean
  name: string
  position: string
  phone: string
  salary: number
  password?: string
}

export interface ICustomer {
  customer_id: number
  name: string
  phone?: string
  email?: string
}

export interface IMenuItem {
  item_id: number
  item_name: string
  description?: string
  price: number
  category?: string
}

export interface IOrder {
  order_id: number
  employee_id: number
  customer_id: number
  table_number: number
  order_date: Date
  total_price: number
  menu_items?: IMenuItem[]
  customer?: ICustomer
  menu_item_ids?: number[]
}

export interface ILogin {
  email: string
  password: string
}

export interface IFormikFormProps {
  initialValues: IOrder
  viewOnly: boolean
  onSubmit?: (values: IOrder) => void
}

export type IFormikForm = (props: IFormikFormProps) => JSX.Element

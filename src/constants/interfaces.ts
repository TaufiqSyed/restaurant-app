export interface IUser {
  is_admin: boolean
  user_id: string
}

export interface IEmployee {
  employee_id: string
  username: string
  is_admin: boolean
  name: string
  position: string
  phone: string
  salary: number
  password?: string
}

export interface ICustomer {
  customer_id: string
  name: string
  phone: string
  email: string
}

export interface IMenuItem {
  item_id: string
  item_name: string
  description?: string
  price: number | ''
  category?: string
}

export interface IOrder {
  order_id: string
  employee_id: string
  customer_id: string
  table_number: number | ''
  order_date: Date | ''
  total_price: number | ''
  menu_items?: IMenuItem[]
  customer?: ICustomer
  menu_item_ids?: string[]
  menu_selects?: IMultiSelect[]
}

export interface IPartialOrder {
  order_id: string
  employee_id: string
  customer_id: string
  table_number: number | ''
  order_date: Date | ''
  total_price: number | ''
  menu_items: IMenuItem[]
  customer?: ICustomer
  menu_item_ids?: string[]
  menu_selects?: IMultiSelect[]
}

export interface ILogin {
  email: string
  password: string
}

export interface IFormikFormProps {
  initialValues: any
  viewOnly: boolean
  onSubmit?: (values: any) => void
  menuItems?: IMenuItem[]
}

export interface IMultiSelect {
  label: string
  value: string
  price?: number
}

export type IFormikForm = (props: IFormikFormProps) => JSX.Element

export interface IApiResponse {
  success: boolean
  message?: string
}

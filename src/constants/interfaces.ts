export interface IUser {
  isadmin: boolean
  user_id: string
}

export interface IEmployee {
  userid: string
  username: string
  isadmin: boolean
  name: string
  position: string
  contact_information: string
  salary: number
  password?: string
}

export interface ICustomer {
  customerid: string
  name: string
  contact_information: string
  email: string
  mgr: string
}

export interface IMenuItem {
  itemid: string
  itemname: string
  description?: string
  price: number | ''
  category?: string
}

export interface IOrder {
  orderid: string
  userid: string
  customerid: string
  tablenumber: number | ''
  orderdate: Date | ''
  total_price: number | ''
  menu_items?: IMenuItem[]
  customer?: ICustomer
  menu_itemids?: string[]
  menu_selects?: IMultiSelect[]
}

export interface IPartialOrder {
  orderid: string
  userid: string
  customerid: string
  tablenumber: number | ''
  orderdate: Date | ''
  total_price: number | ''
  menu_items: IMenuItem[]
  customer?: ICustomer
  menu_itemids?: string[]
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

export interface IUser {
  isadmin: boolean
  userid: string
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
  mgr: string
}

export interface ICustomer {
  customerid: string
  name: string
  contact_information: string
  email: string
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
  employeeid: string
  customerid: string
  tablenumber: number | ''
  orderdate: Date | ''
  totalprice: number | ''
  menu_items?: IMenuItem[]
  customer?: ICustomer
  menu_itemids?: string[]
  menu_selects?: IMultiSelect[]
}

export interface ILogin {
  username: string
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

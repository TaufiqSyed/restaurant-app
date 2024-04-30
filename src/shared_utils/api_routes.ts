export class ApiRoutes {
  static basePath = 'http://localhost:3000'
  static apiV1 = `${ApiRoutes.basePath}/api/v1`
  static orders = `${ApiRoutes.apiV1}/orders`
  static customers = `${ApiRoutes.apiV1}/customers`
  static employees = `${ApiRoutes.apiV1}/employees`
  static menuItems = `${ApiRoutes.apiV1}/menu`

  static orderById = (id: string) => `${ApiRoutes.orders}/${id}`
  static customerById = (id: string) => `${ApiRoutes.customers}/${id}`
  static employeeById = (id: string) => `${ApiRoutes.employees}/${id}`
  static menuItemById = (id: string) => `${ApiRoutes.menuItems}/${id}`

  static employeeByIdResetPwd = (id: string) =>
    `${ApiRoutes.employees}/reset-pwd/${id}`

  // ALL ROUTES:

  // EMPLOYEES TABLE
  // CREATE:
  // Create an employee (POST employees) -> with pwd
  // READ:
  // Read all employees (GET employees) -> no pwd
  // Read employee by id (GET employeeById) -> no pwd
  // UPDATE:
  // Update employee by id (PUT employeeById) -> no pwd
  // Update employee pwd by id (PUT employeeByIdResetPwd)
  // DELETE:
  // Delete employee by id (DELETE employeeById)

  // MENU_ITEMS TABLE
  // CREATE:
  // Create a menu item (POST menuItems)
  // READ:
  // Read all menu items (GET menuItems)
  // Read menu item by id (GET menuItemById)
  // UPDATE:
  // Update menu item by id (PUT menuItemById)
  // DELETE:
  // Delete menu item by id (DELETE menuItemById)

  // CUSTOMERS TABLE
  // CREATE:
  // Create a customer (POST customers)
  // READ:
  // Read all customers (GET customers)
  // Read customer by id (GET customerById)
  // UPDATE:
  // Update customer by id (PUT customerById)
  // DELETE:
  // Delete customer by id (DELETE customerById)

  // ORDERS TABLE
  // CREATE:
  // Create an order (POST menuItems)
  // READ:
  // Read all orders (GET orders)
  // Read order by id (GET orderById)
  // UPDATE:
  // Update order by id (PUT orderById)
  // DELETE:
  // Delete order by id (DELETE orderById)
}

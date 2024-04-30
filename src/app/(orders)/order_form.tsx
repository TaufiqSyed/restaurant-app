import { Formik, Field, isInteger } from 'formik'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react'
import { isNumeric } from '@/shared_utils/is_numeric'
import { IOrder } from '@/constants/interfaces'

// order_id: number
// employee_id: number
// customer_id: number
// table_number: number
// order_date: Date
// total_price: number
// menu_items?: IMenuItem[]
// customer?: ICustomer
// menu_item_ids?: number[]

export default function OrderForm({
  initialValues,
  viewOnly,
  onSubmit,
}: {
  initialValues: IOrder
  viewOnly: boolean
  onSubmit?: (values: IOrder) => void
}) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit ?? (() => {})}>
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl isReadOnly={viewOnly}>
              <FormLabel htmlFor='order_id'>Order ID</FormLabel>
              <Field
                as={Input}
                id='order_id'
                name='order_id'
                // type='order_id'
                type='number'
                variant='filled'
                readonly
              />
            </FormControl>
            <FormControl
              isInvalid={!!errors.employee_id && touched.employee_id}
              isReadOnly={viewOnly}
            >
              <FormLabel htmlFor='password'>Employee ID</FormLabel>
              <Field
                as={Input}
                id='employee_id'
                name='employee_id'
                // type='employee_id'
                type='number'
                variant='filled'
                validate={(value: number) => {
                  let error
                  if (!isInteger(value)) {
                    error = 'Employee ID must be an integer'
                  }
                  if (value <= 0) {
                    error = 'Employee ID cannot be negative'
                  }
                }}
              />
              <FormErrorMessage>{errors.employee_id}</FormErrorMessage>
            </FormControl>
            {!viewOnly && (
              <Button type='submit' colorScheme='purple' width='full' mt='23px'>
                Save Changes
              </Button>
            )}
          </VStack>
        </form>
      )}
    </Formik>
  )
}

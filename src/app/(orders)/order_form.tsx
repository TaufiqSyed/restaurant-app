import { Formik, Field } from 'formik'
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
import { IOrderForm } from '@/constants/interfaces'

export default function OrderForm({
  initialValues,
  viewOnly,
}: {
  initialValues: IOrderForm
  viewOnly: boolean
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl isReadOnly={viewOnly}>
              <FormLabel htmlFor='order_id'>Order ID</FormLabel>
              <Field
                as={Input}
                id='order_id'
                name='order_id'
                type='order_id'
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
                type='employee_id'
                variant='filled'
                validate={(value: string) => {
                  let error
                  if (value.includes('.')) {
                    error = 'Employee ID cannot contain full stops'
                  }
                  if (!isNumeric(value)) {
                    error = 'Employee ID must be a valid integer'
                  }
                  return error
                }}
              />
              <FormErrorMessage>{errors.employee_id}</FormErrorMessage>
            </FormControl>
            <Button type='submit' colorScheme='purple' width='full'>
              Save Changes
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  )
}

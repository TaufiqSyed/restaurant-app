'use client'
import { Formik, Field, isInteger } from 'formik'
import {
  Box,
  Text,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  IconButton,
  Icon,
} from '@chakra-ui/react'
import { isNumeric } from '@/shared_utils/is_numeric'
import {
  IMenuItem,
  IMultiSelect,
  IOrder,
  IPartialOrder,
} from '@/constants/interfaces'
import { Validator } from '@/shared_utils/validator'
import { GenericField } from '@/components/generic_field'
import { DatePickerField } from '../../components/date_picker_field'
import { DataItem } from '../../components/data_item'
import { MdDelete } from 'react-icons/md'
// import CustomSelect from '../shared_components/custom_select'

import '../globals.css'
import { MultiValue, Select } from 'chakra-react-select'
import { randomName } from '@/shared_utils/mock_random_data'

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
  menuItems,
}: {
  initialValues: IPartialOrder
  viewOnly: boolean
  onSubmit?: (values: IOrder) => void
  menuItems?: IMenuItem[]
}) {
  const options = (menuItems ?? []).map((e) => ({
    label: e.item_name,
    value: e.item_id,
    price: e.price,
  }))

  initialValues = {
    ...initialValues,
    menu_selects: (initialValues?.menu_items ?? []).map((e) => ({
      label: e.item_name,
      value: e.item_id,
      price: e.price as number,
    })),
  }

  console.log('options ' + JSON.stringify(options))
  console.log('initval' + JSON.stringify(initialValues))
  console.log('menu' + JSON.stringify(menuItems))
  console.log('fjdaklfj ' + JSON.stringify(initialValues?.menu_selects))
  onSubmit = onSubmit ?? (() => {})
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IPartialOrder) => onSubmit(values as IOrder)}
    >
      {({ values, handleSubmit, errors, touched, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.order_id && touched.order_id}
            >
              <FormLabel>Order ID</FormLabel>
              <GenericField
                key='order_id'
                id='order_id'
                validate={Validator.nonEmpty}
                type='text'
              />
              <FormErrorMessage>{errors.order_id}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!errors.employee_id && touched.employee_id}
              isReadOnly={viewOnly}
            >
              <FormLabel>Employee ID</FormLabel>
              <GenericField
                key='employee_id'
                id='employee_id'
                validate={Validator.nonEmpty}
                type='text'
              />
              <FormErrorMessage>{errors.employee_id}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors.table_number && touched.table_number}
              isReadOnly={viewOnly}
            >
              <FormLabel>Table Number</FormLabel>
              <GenericField
                key='table_number'
                id='table_number'
                validate={Validator.posInteger}
                type='number'
              />
              <FormErrorMessage>{errors.table_number}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Order Date</FormLabel>
              <DatePickerField name='order_date' isReadOnly={viewOnly} />
            </FormControl>
            <FormControl
              isInvalid={!!errors.customer_id && touched.customer_id}
              isReadOnly={viewOnly}
            >
              <FormLabel>Customer ID</FormLabel>
              <GenericField
                id='customer_id'
                validate={Validator.nonEmpty}
                type='text'
              />
              <FormErrorMessage>{errors.customer_id}</FormErrorMessage>
            </FormControl>
            {initialValues.customer_id && (
              <>
                <Text fontSize='12px' mt='16px' pl='8px' lineHeight='1' p='0'>
                  Customer before update:
                </Text>
                <DataItem
                  titleField='customer_id'
                  json={initialValues.customer}
                  cursor='auto'
                  width='100%'
                  bgColor='secondaryColor'
                  m='0'
                />
              </>
            )}
            <FormControl
              isInvalid={values.menu_selects?.length == 0}
              isReadOnly={viewOnly}
            >
              <FormLabel>Menu Items</FormLabel>
              <Select
                options={options as IMultiSelect[]}
                name='menu_selects'
                value={values.menu_selects ?? []}
                onChange={(e: MultiValue<IMultiSelect>) => {
                  if (viewOnly) return
                  setFieldValue('menu_selects', e)
                }}
                isMulti
                className='select-form'
                isReadOnly={viewOnly}
                isClearable={!viewOnly}
              />
              <FormErrorMessage>
                At least one menu item needed for an order
              </FormErrorMessage>
            </FormControl>

            {/* <Field
              options={options}
              name='menu_selects'
              component={Select}
              value={values.menu_selects ?? []}
              // initialValues={initialValues.menu_selects ?? []}
              onChange={(e: IMultiSelect[]) => setFieldValue('menu_selects', e)}
              isMulti
              className='select-form'
              isReadOnly={viewOnly}
            /> */}
            <FormControl isReadOnly={true}>
              <FormLabel>Total Price</FormLabel>
              <Field
                as={Input}
                value={
                  viewOnly
                    ? values.total_price
                    : (values.menu_selects ?? []).reduce(
                        (a, b) => a + b.price!,
                        0
                      )
                }
                type={'number'}
                variant='filled'
              />
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

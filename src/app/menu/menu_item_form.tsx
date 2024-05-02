'use client'
import { Formik } from 'formik'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react'
import { IMenuItem } from '@/constants/interfaces'
import { Validator } from '@/shared_utils/validator'
import { GenericField } from '@/components/generic_field'

import '../globals.css'

// item_id: string
// item_name: string
// description?: string
// price: number | ''
// category?: string

export default function MenuItemForm({
  initialValues,
  viewOnly,
  onSubmit,
  menuItems,
}: {
  initialValues: IMenuItem
  viewOnly: boolean
  onSubmit?: (values: IMenuItem) => void
  menuItems?: IMenuItem[]
}) {
  onSubmit = onSubmit ?? (() => {})
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IMenuItem) => onSubmit(values as IMenuItem)}
    >
      {({ values, handleSubmit, errors, touched, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.item_id && touched.item_id}
            >
              <FormLabel>Item ID</FormLabel>
              <GenericField
                key='item_id'
                id='item_id'
                validate={Validator.nonEmpty}
              />
              <FormErrorMessage>{errors.item_id}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.item_name && touched.item_name}
            >
              <FormLabel>Item Name</FormLabel>
              <GenericField
                key='item_name'
                id='item_name'
                validate={Validator.nonEmpty}
              />
              <FormErrorMessage>{errors.item_name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.description && touched.description}
            >
              <FormLabel>Description</FormLabel>
              <GenericField
                key='description'
                id='description'
                validate={Validator.nonEmpty}
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.price && touched.price}
            >
              <FormLabel>Price</FormLabel>
              <GenericField
                key='price'
                id='price'
                validate={Validator.posInteger}
                type='number'
              />
              <FormErrorMessage>{errors.price}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.category && touched.category}
            >
              <FormLabel>Category</FormLabel>
              <GenericField
                key='category'
                id='category'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.category}</FormErrorMessage>
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

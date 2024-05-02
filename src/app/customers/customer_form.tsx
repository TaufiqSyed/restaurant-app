'use client'
import { Formik } from 'formik'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react'
import { IMenuItem, ICustomer } from '@/constants/interfaces'
import { Validator } from '@/shared_utils/validator'
import { GenericField } from '@/components/generic_field'

import '../globals.css'

// customerid: string
// name: string
// contact_information: string
// email: string

export default function CustomerForm({
  initialValues,
  viewOnly,
  onSubmit,
  menuItems,
}: {
  initialValues: ICustomer
  viewOnly: boolean
  onSubmit?: (values: ICustomer) => void
  menuItems?: IMenuItem[]
}) {
  onSubmit = onSubmit ?? (() => {})
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICustomer) => onSubmit(values as ICustomer)}
    >
      {({ values, handleSubmit, errors, touched, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.customerid && touched.customerid}
            >
              <FormLabel>Customer ID</FormLabel>
              <GenericField
                key='customerid'
                id='customerid'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.customerid}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.name && touched.name}
            >
              <FormLabel>Name</FormLabel>
              <GenericField
                key='name'
                id='name'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={
                !!errors.contact_information && touched.contact_information
              }
            >
              <FormLabel>contact_information</FormLabel>
              <GenericField
                key='contact_information'
                id='contact_information'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.contact_information}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.email && touched.email}
            >
              <FormLabel>Email</FormLabel>
              <GenericField
                key='email'
                id='email'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
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

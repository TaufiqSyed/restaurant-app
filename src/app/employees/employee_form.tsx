'use client'
import { Field, Formik } from 'formik'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Checkbox,
} from '@chakra-ui/react'
import { IMenuItem, IEmployee } from '@/constants/interfaces'
import { Validator } from '@/shared_utils/validator'
import { GenericField } from '@/components/generic_field'

import '../globals.css'

// userid: string
// username: string
// isadmin: boolean
// name: string
// position: string
// contact_information: string
// salary: number
// password?: string

export default function EmployeeForm({
  initialValues,
  viewOnly,
  onSubmit,
  menuItems,
}: {
  initialValues: IEmployee
  viewOnly: boolean
  onSubmit?: (values: IEmployee) => void
  menuItems?: IMenuItem[]
}) {
  onSubmit = onSubmit ?? (() => {})
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IEmployee) => onSubmit(values as IEmployee)}
    >
      {({ values, handleSubmit, errors, touched, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            {viewOnly && (
              <FormControl
                isReadOnly={true}
                isInvalid={!!errors.userid && touched.userid}
              >
                <FormLabel>Employee ID</FormLabel>
                <GenericField key='userid' id='userid' validate={() => {}} />
              </FormControl>
            )}
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.username && touched.username}
            >
              <FormLabel>Username</FormLabel>
              <GenericField
                key='username'
                id='username'
                validate={Validator.nonEmpty}
              />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.isadmin && touched.isadmin}
              display='flex'
              flexDir='row'
              alignItems='center'
            >
              <Field
                as={Checkbox}
                id='isadmin'
                name='isadmin'
                type='checkbox'
                variant='filled'
                isChecked={values.isadmin}
                // checked={values.isadmin}
                onChange={(e: any) =>
                  setFieldValue('isadmin', e.target.checked)
                }
                colorScheme='purple'
                validate={() => {}}
              />
              <FormLabel p='20px 12px 20px 12px' lineHeight='1' m='0'>
                Admin
              </FormLabel>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.position && touched.position}
            >
              <FormLabel>Position</FormLabel>
              <GenericField
                key='position'
                id='position'
                validate={Validator.nonEmpty}
              />
              <FormErrorMessage>{errors.position}</FormErrorMessage>
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
              isInvalid={!!errors.password && touched.password}
            >
              <FormLabel>Password</FormLabel>
              <GenericField
                key='password'
                id='password'
                validate={Validator.nonEmpty}
                // validate={Validator.posInteger}
                type='password'
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.mgr && touched.mgr}
            >
              <FormLabel>Manager ID</FormLabel>
              <GenericField key='mgr' id='mgr' validate={Validator.nonEmpty} />
              <FormErrorMessage>{errors.mgr}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={
                !!errors.contact_information && touched.contact_information
              }
            >
              <FormLabel>Contact Information</FormLabel>
              <GenericField
                key='contact_information'
                id='contact_information'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.contact_information}</FormErrorMessage>
            </FormControl>
            <FormControl
              isReadOnly={viewOnly}
              isInvalid={!!errors.salary && touched.salary}
            >
              <FormLabel>Salary</FormLabel>
              <GenericField
                key='salary'
                id='salary'
                validate={Validator.posInteger}
              />
              <FormErrorMessage>{errors.salary}</FormErrorMessage>
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

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
import { ILogin } from '@/constants/interfaces'

export default function LoginForm({
  initialValues,
  viewOnly,
  onSubmit,
}: {
  initialValues: ILogin
  viewOnly: boolean
  onSubmit: (values: any) => void
}) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Field
                as={Input}
                id='username'
                name='username'
                type='text'
                variant='filled'
              />
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Field
                as={Input}
                id='password'
                name='password'
                type='password'
                variant='filled'
                validate={(value: string) => {
                  let error

                  if (value.length < 6) {
                    error = 'Password must contain at least 6 characters'
                  }

                  return error
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Field
              as={Checkbox}
              id='rememberMe'
              name='rememberMe'
              colorScheme='purple'
            >
              Remember me?
            </Field>
            <Button type='submit' colorScheme='purple' width='full'>
              Login
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  )
}

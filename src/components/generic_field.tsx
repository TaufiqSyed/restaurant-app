import { Input } from '@chakra-ui/react'
import { Field } from 'formik'

export const GenericField = ({
  id,
  type,
  validate,
}: {
  id: string
  type?: string
  validate: any
}) => {
  return (
    <Field
      as={Input}
      id={id}
      name={id}
      type={type ?? 'text'}
      variant='filled'
      validate={validate}
    />
  )
}

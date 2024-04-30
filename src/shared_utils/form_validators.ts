import { isNumeric } from './is_numeric'

const integerValidator = (value: string) => {
  let error
  if (value.includes('.')) {
    error = 'Employee ID cannot contain full stops'
  }
  if (!isNumeric(value)) {
    error = 'Employee ID must be a valid integer'
  }
  return error
}

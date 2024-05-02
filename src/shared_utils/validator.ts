import { isInteger } from 'formik'

export class Validator {
  static posInteger = (value: number) => {
    let error
    if (!isInteger(value)) {
      error = 'Employee ID must be an integer'
    }
    if (value <= 0) {
      error = 'Employee ID cannot be negative'
    }
  }
}

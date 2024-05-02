export class Validator {
  static posInteger = (value: any) => {
    let error
    if (!Number.isInteger(value)) {
      error = 'Employee ID must be an integer'
    }
    if (value <= 0) {
      error = 'Employee ID cannot be negative'
    }
    return error
  }
}

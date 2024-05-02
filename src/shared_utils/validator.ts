export class Validator {
  static posInteger = (value: number | '') => {
    let error
    if (value != '' && value <= 0) {
      error = 'Cannot be negative'
    }
    if (value == '') error = 'Cannot be empty'
    return error
  }
  static nonEmpty = (value: string) => {
    let error
    if (value == '') error = 'Cannot be empty'
    return error
  }
}

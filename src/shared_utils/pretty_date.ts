export const prettyDate = (date: Date) => {
  const yyyy = date.getFullYear()
  let mm = date.getMonth() + 1 // Months start at 0!
  let dd = date.getDate()

  let ddString: string = dd.toString()
  let mmString: string = mm.toString()
  let yyyyString: string = yyyy.toString()
  if (dd < 10) ddString = '0' + dd.toString()
  if (mm < 10) mmString = '0' + mm.toString()

  const formatted = ddString + '/' + mmString + '/' + yyyyString
  return formatted
}

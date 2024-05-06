import { prettyDate } from './pretty_date'

export const fieldString = (x: any) => {
  if (x instanceof Date) {
    return prettyDate(x)
  } else {
    return (x ?? 'N/A').toString()
  }
}

import DatePicker from '@/components/date_picker/date_picker'
import { useField } from 'formik'

export const DatePickerField = ({
  name,
  isReadOnly = false,
}: {
  name: string
  isReadOnly: boolean
}) => {
  const [field, meta, helpers] = useField(name)

  const { value } = meta
  const { setValue } = helpers

  return (
    <DatePicker
      {...field}
      selectedDate={value}
      onChange={(date) => setValue(date)}
      showTimeSelect
      readOnly={isReadOnly}
    />
  )
}

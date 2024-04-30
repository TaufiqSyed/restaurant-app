import { componentColor } from '@/constants/colors'
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import OrderForm from '../(orders)/order_form'
import { ReactNode } from 'react'
import { IFormikForm } from '@/constants/interfaces'

export const DataItemDetailEdit = ({
  dataHeader: datatype,
  titleField,
  json,
  onBack,
  onSave,
  onCancel,
  omitFields,
  FormikForm,
}: {
  dataHeader: string
  titleField: string
  json: any
  onBack: () => void
  onSave: () => void
  onCancel: () => void
  omitFields: string[] | null | undefined
  FormikForm: IFormikForm
}) => {
  let fieldnames = Object.keys(json).filter((e) => e != titleField)
  if (omitFields != null) {
    fieldnames = fieldnames.filter((e) => !omitFields!.includes(e))
  }
  let fieldsvals: any[] = fieldnames.map((e) => json[e])
  let title: any = json[titleField]
  return (
    <Box
      borderRadius='12px'
      bgColor={componentColor}
      position='relative'
      p='48px 32px'
      w='100%'
      h='550px'
    >
      <Box>
        <Button onClick={onBack} mb='30px'>
          {'<< Back to dashboard'}
        </Button>
        <Flex flexDir='row' w='100%' justifyContent={'space-between'}>
          <Text fontSize='32px' fontWeight='bold' mb='12px'>
            {datatype}
          </Text>
        </Flex>
      </Box>
      <Box fontSize='22px' mt='12px'>
        <FormikForm initialValues={json} viewOnly={false} onSubmit={onSave} />
        <Button onClick={onCancel} width='full' mt='14px'>
          Cancel
        </Button>
      </Box>
    </Box>
  )
}

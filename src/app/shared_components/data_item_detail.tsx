import { componentColor } from '@/constants/colors'
import { Box, Button, Text, Flex, IconButton, Icon } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import OrderForm from '../(orders)/order_form'
import { IFormikForm } from '@/constants/interfaces'

export const DataItemDetail = ({
  dataHeader,
  titleField,
  json,
  onBack,
  onEdit,
  FormikForm,
  omitFields,
}: {
  dataHeader: string
  titleField: string
  json: any
  onBack: () => void
  onEdit: () => void
  FormikForm: IFormikForm
  omitFields?: string[]
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
            {dataHeader}
          </Text>
          <IconButton
            icon={<MdEdit />}
            aria-label={'Edit Information'}
            onClick={onEdit}
          />
        </Flex>
      </Box>
      <Box fontSize='22px' mt='12px'>
        <FormikForm initialValues={json} viewOnly={true} />
      </Box>
    </Box>
  )
}

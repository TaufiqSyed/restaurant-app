import { Box, Button, Text, Flex } from '@chakra-ui/react'
import {
  ICustomer,
  IEmployee,
  IFormikForm,
  IMenuItem,
} from '@/constants/interfaces'
interface extraProps {
  customers?: ICustomer[]
  employees?: IEmployee[]
}
export const DataItemDetailEdit = ({
  dataHeader: datatype,
  // titleField,
  json,
  onBack,
  onSave,
  onCancel,
  omitFields,
  FormikForm,
  menuItems,
  ...props
}: {
  dataHeader: string
  // titleField: string
  json: any
  onBack: () => void
  onSave: (values: any) => void
  onCancel: () => void
  omitFields: string[] | null | undefined
  FormikForm: IFormikForm
  menuItems?: IMenuItem[]
} & extraProps) => {
  // let fieldnames = Object.keys(json).filter((e) => e != titleField)
  // let fieldnames = Object.keys()
  // if (omitFields != null) {
  //   fieldnames = fieldnames.filter((e) => !omitFields!.includes(e))
  // }
  return (
    <Box
      borderRadius='12px'
      bgColor='componentColor'
      position='relative'
      p='48px 32px'
      w='100%'
    >
      <Box>
        <Button onClick={onBack} mb='30px' colorScheme='purple'>
          {'<< Back to dashboard'}
        </Button>
        <Flex flexDir='row' w='100%' justifyContent={'space-between'}>
          <Text fontSize='32px' fontWeight='bold' mb='12px'>
            {datatype}
          </Text>
        </Flex>
      </Box>
      <Box fontSize='22px' mt='12px'>
        <FormikForm
          initialValues={json}
          viewOnly={false}
          onSubmit={onSave}
          menuItems={menuItems}
          {...props}
        />
        <Button onClick={onCancel} width='full' mt='14px'>
          Cancel
        </Button>
      </Box>
    </Box>
  )
}

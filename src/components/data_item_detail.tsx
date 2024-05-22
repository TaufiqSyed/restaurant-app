import {
  Box,
  Button,
  Text,
  Flex,
  IconButton,
  background,
} from '@chakra-ui/react'
import { MdDelete, MdEdit } from 'react-icons/md'
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

export const DataItemDetail = ({
  dataHeader,
  // titleField,
  json,
  onBack,
  onEdit,
  onDelete,
  FormikForm,
  omitFields,
  menuItems,
  ...props
}: {
  dataHeader: string
  // titleField: string
  json: any
  onBack: () => void
  onEdit: () => void
  onDelete: () => void
  FormikForm: IFormikForm
  omitFields?: string[]
  menuItems?: IMenuItem[]
} & extraProps) => {
  // let fieldnames = Object.keys(json).filter((e) => e != titleField)
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
            {dataHeader}
          </Text>
          <Flex flexDir='row'>
            <IconButton
              icon={<MdDelete />}
              aria-label={'Delete Item'}
              onClick={onDelete}
              colorScheme='red'
              m='0 8px'
            />
            <IconButton
              icon={<MdEdit />}
              aria-label={'Edit Information'}
              onClick={onEdit}
              m='0 8px'
              colorScheme='purple'
            />
          </Flex>
        </Flex>
      </Box>
      <Box fontSize='22px' mt='12px'>
        <FormikForm
          initialValues={json}
          viewOnly={true}
          menuItems={menuItems}
          {...props}
        />
      </Box>
    </Box>
  )
}

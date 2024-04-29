import { componentColor } from '@/constants/colors'
import { Box, Button, Text, Flex, IconButton, Icon } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'

export const DataItemDetail = ({
  datatype,
  titleField,
  json,
  onBack,
  onEdit,
  omitFields,
}: {
  datatype: string
  titleField: string
  json: any
  onBack: () => void
  onEdit: () => void
  omitFields: string[] | null | undefined
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
          {'<< Back'}
        </Button>
        <Flex flexDir='row' w='100%' justifyContent={'space-between'}>
          <Text fontSize='32px' fontWeight='bold' mb='12px'>
            {datatype}
          </Text>
          <IconButton
            aria-label='Edit Information'
            icon={<MdEdit />}
            onClick={onEdit}
          ></IconButton>
        </Flex>
        <Text fontSize='24px' fontWeight='bold' mb='4px'>
          {'@' + title}
        </Text>
      </Box>
      <Box fontSize='22px' mt='12px'>
        {fieldnames.map((attrname, idx) => {
          return (
            <Flex
              flexDir='row'
              w='100%'
              justifyContent={'space-between'}
              p='4px 0'
            >
              <Text mr='4px'>{attrname + ': '}</Text>
              <Text>{fieldsvals[idx]}</Text>
            </Flex>
          )
        })}
      </Box>
    </Box>
  )
}

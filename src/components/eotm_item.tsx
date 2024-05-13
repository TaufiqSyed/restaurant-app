import { fieldString } from '@/shared_utils/field_string'
import { Box, Button, Text, Flex, BoxProps, Icon } from '@chakra-ui/react'
import { MdBadge, MdPerson } from 'react-icons/md'

export const EotmItem = ({
  titleField,
  json,
  onClick,
  omitFields,
  cursor,
  ...props
}: {
  titleField: string
  json: any
  onClick?: () => void
  omitFields?: string[]
  cursor?: string
} & BoxProps) => {
  let title: any = json[titleField]
  let fieldnames = Object.keys(json).filter((e) => e != titleField)
  if (omitFields != null) {
    fieldnames = fieldnames.filter((e) => !omitFields!.includes(e))
  }
  let fieldsvals: any[] = fieldnames.map((e) => json[e])
  return (
    <Box
      borderRadius='12px'
      fontSize='24px'
      bgColor='componentColor'
      position='relative'
      p='32px 32px 32px 32px'
      cursor={cursor ?? 'pointer'}
      onClick={onClick}
      boxShadow='0 0 0 10px var(--chakra-colors-dark-background)'
      {...props}
    >
      <Box display='flex' dir='column' w='100%'>
        <Box display='flex' dir='row' alignItems='center'>
          <Icon as={MdBadge} boxSize='48px' mr='12px' />
          <Text fontWeight='bold'>Employee of the Month</Text>
        </Box>
        <Box w='64px'></Box>
        <Box display='flex' dir='column' w='100%'>
          <Box w='100%'>
            <Text
              fontSize={'24px'}
              fontWeight='bold'
              mb='4px'
              onClick={onClick}
            >
              {'@' + title}
            </Text>
            <Box w='100%' maxW='1000px'>
              {fieldnames.map((attrname, idx) => {
                return (
                  <Flex
                    flexDir='row'
                    w='100%'
                    justifyContent={'space-between'}
                    key={`${title}:${attrname}`}
                  >
                    <Text mr='4px'>{attrname + ':'}</Text>
                    <Text fontWeight='bold'>
                      {fieldString(fieldsvals[idx])}
                    </Text>
                  </Flex>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    // </LinkOverlay>
  )
}

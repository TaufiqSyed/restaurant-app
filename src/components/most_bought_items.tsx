import { fieldString } from '@/shared_utils/field_string'
import { Box, Button, Text, Flex, BoxProps, Icon } from '@chakra-ui/react'
import { MdRestaurant } from 'react-icons/md'

export const MostBoughtItems = ({
  titleField,
  json,
  onClick,
  omitFields,
  cursor,
  nth,
  ...props
}: {
  titleField: string
  json: any
  onClick?: () => void
  nth: number
  omitFields?: string[]
  cursor?: string
} & BoxProps) => {
  let fieldnames = Object.keys(json)
  if (omitFields != null) {
    fieldnames = fieldnames.filter((e) => !omitFields!.includes(e))
  }
  let fieldsvals: any[] = fieldnames.map((e) => json[e])
  return (
    <Box
      borderRadius='12px'
      fontSize='20px'
      bgColor='componentColor'
      position='relative'
      p='32px 26px'
      cursor={cursor ?? 'pointer'}
      onClick={onClick}
      boxShadow='0 0 0 10px var(--chakra-colors-dark-background)'
      {...props}
    >
      <Box
        display='flex'
        dir='row'
        justifyContent='space-between'
        w='100%'
        mb='30px'
      >
        <Icon as={MdRestaurant} boxSize='32px' />
        <Text fontWeight='bold' w='220px'>
          Most Popular Item #{nth}
        </Text>
      </Box>
      <Box>
        {fieldnames.map((attrname, idx) => {
          return (
            <Flex
              flexDir='row'
              w='100%'
              justifyContent={'space-between'}
              key={`freq:${nth}:${attrname}`}
            >
              <Text mr='4px'>{attrname + ':'}</Text>
              <Text>{fieldString(fieldsvals[idx])}</Text>
            </Flex>
          )
        })}
      </Box>
    </Box>
    // </LinkOverlay>
  )
}

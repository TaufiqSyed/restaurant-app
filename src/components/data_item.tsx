import { fieldString } from '@/shared_utils/field_string'
import { Box, Button, Text, Flex, BoxProps } from '@chakra-ui/react'

export const DataItem = ({
  titleField,
  json,
  onClick,
  omitFields,
  cursor,
  titleFontSize,
  ...props
}: {
  titleField: string
  json: any
  onClick?: () => void
  omitFields?: string[]
  cursor?: string
  titleFontSize?: string
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
      fontSize='16px'
      bgColor='componentColor'
      position='relative'
      p='22px 26px'
      cursor={cursor ?? 'pointer'}
      onClick={onClick}
      boxShadow='0 0 0 10px var(--chakra-colors-dark-background)'
      {...props}
    >
      <Box>
        <Text
          fontSize={titleFontSize ?? '18px'}
          fontWeight='bold'
          mb='4px'
          onClick={onClick}
        >
          {'@' + title}
        </Text>
      </Box>
      <Box>
        {fieldnames.map((attrname, idx) => {
          return (
            <Flex
              flexDir='row'
              w='100%'
              justifyContent={'space-between'}
              key={`${title}:${attrname}`}
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

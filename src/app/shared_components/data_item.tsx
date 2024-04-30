import { componentColor } from '@/constants/colors'
import { Box, Button, Text, Flex } from '@chakra-ui/react'

export const DataItem = ({
  titleField,
  json,
  onClick,
  omitFields,
}: {
  titleField: string
  json: any
  onClick: () => void
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
      p='22px 26px'
      cursor='pointer'
      onClick={onClick}
    >
      <Box>
        <Text fontSize='18px' fontWeight='bold' mb='4px' onClick={onClick}>
          {'@' + title}
        </Text>
      </Box>
      <Box fontSize='16px'>
        {fieldnames.map((attrname, idx) => {
          return (
            <Flex
              flexDir='row'
              w='100%'
              justifyContent={'space-between'}
              key={`${title}:${attrname}`}
            >
              <Text mr='4px'>{attrname + ':'}</Text>
              <Text>{fieldsvals[idx]}</Text>
            </Flex>
          )
        })}
      </Box>
    </Box>
    // </LinkOverlay>
  )
}

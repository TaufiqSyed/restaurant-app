import { mockNames } from '@/constants/mock_names'

export const randomSmallInteger = () => {}

export const randomInteger = () => {
  return Math.floor(Math.random() * 10000 + 1)
}

export const randomName = () => {
  const i = Math.floor(Math.random() * mockNames.length)
  return mockNames[i]
}

function randomDateBounded(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

export const randomDate = () => {
  return randomDateBounded(new Date(2010, 1, 1), new Date(2020, 1, 1))
}

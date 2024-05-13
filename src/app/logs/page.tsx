'use client'

import { Box, Grid } from '@chakra-ui/react'
import { DataItem } from '../../components/data_item'
import { useRouter } from 'next/navigation'
import { NavigationBar } from '@/components/navigation_bar'
import { Container } from '../../components/container'
import { useState, useEffect } from 'react'
import { LoadingSpinner } from '../../components/loading_spinner'
import { ApiRoutes } from '@/shared_utils/api_routes'
import axios from 'axios'

export default function LogsPage() {
  const [elogs, setELogs] = useState<any[]>([])
  const [ologs, setOLogs] = useState<any[]>([])
  const [mlogs, setMLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const logs_ = (await axios.get(ApiRoutes.logs)).data
    // console.log(JSON.stringify(logs_))
    const [elogs_, ologs_, mlogs_] = logs_
    setELogs(elogs_)
    setOLogs(ologs_)
    setMLogs(mlogs_)
    setLoading(false)
  }

  if (loading) return <LoadingSpinner />
  return (
    <Container root_href='/logs/'>
      {elogs.map((log: any) => (
        <DataItem
          key={log.LOG_ID}
          titleField='LOG_ID'
          json={log}
          onClick={() => {}}
          cursor='auto'
        />
      ))}
      {ologs.map((log: any) => (
        <DataItem
          key={log.LOG_ID}
          titleField='LOG_ID'
          json={log}
          onClick={() => {}}
          cursor='auto'
        />
      ))}
      {mlogs.map((log: any) => (
        <DataItem
          key={log.LOG_ID}
          titleField='LOG_ID'
          json={log}
          onClick={() => {}}
          cursor='auto'
        />
      ))}
    </Container>
  )
}

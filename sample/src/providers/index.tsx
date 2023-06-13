'use client'

import { ReactNode } from 'react'
import { Client, cacheExchange, fetchExchange, Provider } from 'urql'

type Props = {
  children: ReactNode
}

const client = new Client({
  url: '/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

export const Providers = ({ children }: Props) => {
  return <Provider value={client}>{children}</Provider>
}

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { EditUpload } from './EditUpload'

// Create a client
const queryClient = new QueryClient()

export default function Index() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <EditUpload />
    </QueryClientProvider>
  )
}

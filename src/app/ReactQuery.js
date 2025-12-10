"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
export const ReactQueryClient = ({ children }) => {
    const [queryclient] = useState(() => new QueryClient())
    return (
        <>
            <QueryClientProvider client={queryclient}>
                {children}
            </QueryClientProvider>
        </>
    )
}

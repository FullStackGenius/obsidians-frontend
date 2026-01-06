// src/components/Providers.tsx
'use client'

import { Provider } from 'react-redux'
import { useRef } from 'react'
import { makeStore } from '../../../lib/redux/store'
import type { AppStore } from '../../../lib/redux/store'

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
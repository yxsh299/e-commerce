'use client'

import React from 'react'
import { FilterProvider } from './Filter'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'


export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
         <FilterProvider>
           <CartProvider>{children}</CartProvider>
         </FilterProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

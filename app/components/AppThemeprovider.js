"use client"
import { ThemeProvider } from 'next-themes'

function AppThemeprovider({children}) {
  return (
    <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default AppThemeprovider
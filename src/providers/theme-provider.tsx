'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types'

export type ThemeProviderProps = NextThemeProviderProps

export function ThemeProvider({ ...props }: NextThemeProviderProps) {
    return <NextThemesProvider {...props} />
}

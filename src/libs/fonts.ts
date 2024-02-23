import { EB_Garamond, Inconsolata, Inter } from 'next/font/google'

export const serif = EB_Garamond({
    subsets: ['latin'],
    variable: '--font-serif',
})

export const sans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const mono = Inconsolata({
    subsets: ['latin'],
    variable: '--font-mono',
})

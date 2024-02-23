import { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'

import '@/app/globals.css'
import { mono, sans, serif } from '@/libs/fonts'
import cx from '@/libs/variance'
import { BackgroundProvider } from '@/providers/background-provider'
import { LayoutProvider } from '@/providers/layout-provider'
import MultiProvider, { provider } from '@/providers/multi-provider'
import { QueryProvider } from '@/providers/query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata: Metadata = {
    title: 'Aperture',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body
                className={cx([serif.variable, sans.variable, mono.variable])}
            >
                <Suspense>
                    <MultiProvider
                        wrappers={[
                            provider(QueryProvider, {}),
                            provider(ThemeProvider, {
                                attribute: 'class',
                                enableSystem: true,
                            }),
                            provider(LayoutProvider, {}),
                            provider(BackgroundProvider, {}),
                        ]}
                    >
                        {children}
                    </MultiProvider>
                </Suspense>
            </body>
        </html>
    )
}

'use client'

import { ProviderProps, createContext, useContext, useState } from 'react'

export type BackgroundContextType = {
    prev: string
    setPrev: (prev: string) => void
    text: string
    setText: (text: string) => void
}

export type BackgroundProviderProps = Omit<
    ProviderProps<BackgroundContextType>,
    'value'
> & {
    text?: BackgroundContextType['text']
}

export const BackgroundContext = createContext<BackgroundContextType | null>(
    null,
)

export function BackgroundProvider({ ...props }: BackgroundProviderProps) {
    const [prev, setPrev] = useState('')
    const [text, setText] = useState(props.text ?? '')

    function setTextMiddleware(newText: string) {
        setPrev(text)
        setText(newText)
    }

    return (
        <BackgroundContext.Provider
            value={{ prev, setPrev, text, setText: setTextMiddleware }}
            {...props}
        />
    )
}

export function useBackground() {
    const context = useContext(BackgroundContext)
    if (!context)
        throw new Error(
            'useBackground() must be used within a BackgroundProvider',
        )
    return context
}

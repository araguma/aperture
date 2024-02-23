'use client'

import {
    ProviderProps,
    ReactNode,
    createContext,
    useContext,
    useState,
} from 'react'

export type LayoutContextType = {
    card: ReactNode
    setCard: (card: ReactNode) => void
    settings: ReactNode
    setSettings: (settings: ReactNode) => void
}

export type LayoutProviderProps = Omit<
    ProviderProps<LayoutContextType>,
    'value'
> & {
    card?: LayoutContextType['card']
    settings?: LayoutContextType['settings']
}

export const LayoutContext = createContext<LayoutContextType | null>(null)

export function LayoutProvider({ ...props }: LayoutProviderProps) {
    const [card, setCard] = useState(props.card)
    const [settings, setSettings] = useState(props.settings)

    return (
        <LayoutContext.Provider
            value={{ card, setCard, settings, setSettings }}
            {...props}
        />
    )
}

export function useLayout() {
    const context = useContext(LayoutContext)
    if (!context)
        throw new Error('useLayout() must be used within a LayoutProvider')
    return context
}

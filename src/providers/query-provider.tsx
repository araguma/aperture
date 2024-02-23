'use client'

import { parseAsStringLiteral, useQueryState } from 'nuqs'
import { ProviderProps, createContext, useContext } from 'react'

import { ranks, suits, versions } from '@/data/aperture'
import { Rank, Suit, Version } from '@/types/aperture'

export type QueryContextType = {
    version: Version
    setVersion: (version: Version) => void
    rank: Rank
    setRank: (rank: Rank) => void
    suit: Suit
    setSuit: (suit: Suit) => void
}

export type QueryProviderProps = Omit<
    ProviderProps<QueryContextType>,
    'value'
> & {
    version?: QueryContextType['version']
    rank?: QueryContextType['rank']
    suit?: QueryContextType['suit']
}

export const QueryContext = createContext<QueryContextType | null>(null)

export function QueryProvider({ ...props }: QueryProviderProps) {
    const [version, setVersion] = useQueryState(
        'v',
        parseAsStringLiteral(versions).withDefault('v1'),
    )
    const [rank, setRank] = useQueryState(
        'r',
        parseAsStringLiteral(ranks).withDefault('01'),
    )
    const [suit, setSuit] = useQueryState(
        's',
        parseAsStringLiteral(suits).withDefault('spade'),
    )

    return (
        <QueryContext.Provider
            value={{
                version,
                setVersion: (version: Version) => {
                    void setVersion(version)
                },
                rank,
                setRank: (rank: Rank) => {
                    void setRank(rank)
                },
                suit,
                setSuit: (suit: Suit) => {
                    void setSuit(suit)
                },
            }}
            {...props}
        />
    )
}

export function useQuery() {
    const context = useContext(QueryContext)
    if (!context)
        throw new Error('useQuery must be used within a QueryProvider')
    return context
}

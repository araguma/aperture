import { FC, ReactNode } from 'react'

export function provider<T>(Provider: FC<T>, props: T) {
    return (children: ReactNode) => {
        return <Provider {...props}>{children}</Provider>
    }
}

export type MultiProviderProps = {
    wrappers: ((children: ReactNode) => ReactNode)[]
    children: ReactNode
}

export default function MultiProvider({
    wrappers,
    children,
}: MultiProviderProps) {
    return (
        <>
            {wrappers.reduce((acc, cur) => {
                return cur(acc)
            }, children)}
        </>
    )
}

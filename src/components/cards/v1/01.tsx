import { Box, MeshPortalMaterial } from '@react-three/drei'
import { useEffect } from 'react'

import { Card } from '@/components/card'
import Settings from '@/components/settings'
import { useBackground } from '@/providers/background-provider'
import { useLayout } from '@/providers/layout-provider'
import { Suit } from '@/types/aperture'

export type CardProps = JSX.IntrinsicElements['group'] & {
    suit: Suit
}

export default function V1R01() {
    const { setCard, setSettings } = useLayout()
    const { setText } = useBackground()

    useEffect(() => {
        setSettings(<V1R01.Settings />)
        setCard(<V1R01.Card />)
        setText('Ace')
    }, [])

    return null
}

V1R01.Settings = function () {
    return (
        <Settings>
            <Settings.Field label="Toggle" type="toggle" />
            <Settings.Field label="Number" type="number" />
            <Settings.Field label="Color" type="color" />
        </Settings>
    )
}

V1R01.Card = function () {
    return (
        <Card
            material={{
                side: <meshStandardMaterial color="white" />,
                front: (
                    <MeshPortalMaterial>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <color attach="background" args={['black']} />
                        <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} />
                    </MeshPortalMaterial>
                ),
                back: <meshStandardMaterial color="blue" />,
            }}
        />
    )
}

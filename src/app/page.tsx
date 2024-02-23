'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Background from '@/components/background'
import V1R01 from '@/components/cards/v1/01'
import Divider from '@/components/divider'
import FPS from '@/components/fps'
import Header from '@/components/header'
import Rank from '@/components/rank'
import Sidebar from '@/components/sidebar'
import Suit from '@/components/suit'
import { useLayout } from '@/providers/layout-provider'
import { useQuery } from '@/providers/query-provider'

export default function Home() {
    const { card, settings } = useLayout()
    const { version, rank } = useQuery()

    return (
        <>
            <V1R01 />
            <Background />
            <div className="flex h-screen">
                <Header />
                <Sidebar version={version} rank={rank} />
                <div className="flex-1 overflow-hidden">
                    <Canvas frameloop="demand">
                        <FPS fps={60} />
                        <OrbitControls />
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        {card}
                    </Canvas>
                </div>
                <div className="w-1/3">
                    <div className="mr-4 mt-80 flex flex-col gap-4">
                        <div className="flex max-w-[320px] flex-col gap-2">
                            <Rank />
                            <Suit />
                        </div>
                        <Divider
                            orientation="horizontal"
                            length="4rem"
                            className="ml-4"
                        />
                        {settings}
                    </div>
                </div>
            </div>
        </>
    )
}

import { useGLTF } from '@react-three/drei'
import { ReactNode } from 'react'
import { Euler } from 'three'
import { GLTF } from 'three-stdlib'

export type CardProps = JSX.IntrinsicElements['group'] & {
    material: {
        side: ReactNode
        front: ReactNode
        back: ReactNode
    }
}
export type CardGLTF = GLTF & {
    nodes: {
        side: THREE.Mesh
        front: THREE.Mesh
        back: THREE.Mesh
    }
    materials: {
        Material: THREE.MeshStandardMaterial
    }
}

export function Card({ material, ...props }: CardProps) {
    const { nodes } = useGLTF('/card.glb') as CardGLTF
    return (
        <group
            {...props}
            rotation={new Euler(0, 0, Math.PI / 12)}
            dispose={null}
        >
            <mesh geometry={nodes.side.geometry}>{material.side}</mesh>
            <mesh geometry={nodes.front.geometry}>{material.front}</mesh>
            <mesh geometry={nodes.back.geometry}>{material.back}</mesh>
        </group>
    )
}

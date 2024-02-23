import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export type FPSProps = {
    fps?: number
}

export default function FPS({ fps = 60 }: FPSProps) {
    const { invalidate, clock } = useThree()
    const interval = 1 / fps
    useEffect(() => {
        let delta = 0
        const update = () => {
            requestAnimationFrame(update)
            delta += clock.getDelta()

            if (delta > interval) {
                invalidate()
                delta = delta % interval
            }
        }

        update()
    }, [])

    return null
}

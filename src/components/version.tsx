import { useEffect, useRef, useState } from 'react'

import Button from '@/components/button'
import Typography from '@/components/typography'
import { versions } from '@/data/aperture'
import { assertIsNode } from '@/libs/assert'
import { useQuery } from '@/providers/query-provider'

export default function Version() {
    const popoverRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const { version: currentVersion, setVersion } = useQuery()

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    function handleClick(event: MouseEvent) {
        assertIsNode(event.target)
        if (!popoverRef.current?.contains(event.target)) setOpen(false)
    }

    return (
        <div ref={popoverRef}>
            <Button
                variant="icon"
                onClick={() => {
                    setOpen(!open)
                }}
            >
                <Typography font="mono" size="body">
                    {currentVersion}
                </Typography>
            </Button>
            {open && (
                <div className="absolute flex flex-col">
                    {versions.map((version) => {
                        return version === currentVersion ? null : (
                            <Button
                                key={version}
                                variant="icon"
                                state="inactive"
                                onClick={() => {
                                    setVersion(version)
                                    setOpen(false)
                                }}
                            >
                                <Typography font="mono" size="body">
                                    {version}
                                </Typography>
                            </Button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

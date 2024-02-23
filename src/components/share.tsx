'use client'

import { useState } from 'react'

import Button, { ButtonProps } from '@/components/button'
import Icon from '@/components/icon'
import { Optional } from '@/types/aperture'

export type ShareButtonProps = Optional<ButtonProps, 'variant'>

export default function Share({ ...props }: ShareButtonProps) {
    const [copied, setCopied] = useState(false)

    function copyURLToClipboard() {
        void navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 1000)
        })
    }

    return (
        <Button variant="icon" onClick={copyURLToClipboard} {...props}>
            {!copied ? <Icon icon="link" /> : <Icon icon="check" />}
        </Button>
    )
}

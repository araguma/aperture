'use client'

import { useState } from 'react'

import cx from '@/libs/variance'

export type InputProps = (
    | {
          type: 'toggle'
          onChange?: (value: boolean) => void
      }
    | {
          type: 'number'
          onChange?: (value: number) => void
      }
    | {
          type: 'color'
          onChange?: (value: string) => void
      }
) & {
    className?: string
    toggled?: boolean
    number?: number
    color?: string
}

export default function Input({
    type,
    onChange,
    className,
    toggled,
    number,
    color,
}: InputProps) {
    switch (type) {
        case 'toggle': {
            const [isToggled, setIsToggled] = useState(!!toggled)

            return (
                <label
                    className={cx('relative inline-block h-4 w-8', className)}
                >
                    <input
                        className="h-0 w-0"
                        type="checkbox"
                        checked={isToggled}
                        onChange={() => {
                            const newValue = !isToggled
                            onChange?.(newValue)
                            setIsToggled(newValue)
                        }}
                    />
                    <div
                        className={cx([
                            'absolute',
                            'bg-press-2',
                            'top-0',
                            'left-0',
                            'bottom-0',
                            'right-0',
                            'cursor-pointer',
                            'rounded-full',
                            'before:absolute',
                            'before:bg-current',
                            'before:h-4',
                            'before:w-4',
                            'before:rounded-full',
                            'before:duration-100',
                            {
                                'before:translate-x-4': isToggled,
                            },
                        ])}
                    />
                </label>
            )
        }
        case 'number': {
            const [currentNumber, setCurrentNumbre] = useState(number ?? 0)

            return (
                <input
                    className={cx(
                        'h-6 w-16 border-b-[1px] border-press-7 bg-inherit font-mono text-xs',
                        className,
                    )}
                    type="number"
                    value={currentNumber}
                    onChange={(event) => {
                        const newValue = parseFloat(event.target.value)
                        onChange?.(newValue)
                        setCurrentNumbre(newValue)
                    }}
                />
            )
        }
        case 'color': {
            const [currentColor, setCurrentColor] = useState(color ?? '#000000')

            return (
                <label className={cx('relative inline-block', className)}>
                    <input
                        className="h-0 w-0 opacity-0"
                        type="color"
                        value={currentColor}
                        onChange={(event) => {
                            const newValue = event.target.value
                            onChange?.(newValue)
                            setCurrentColor(newValue)
                        }}
                    />
                    <div className="absolute left-0 top-0 flex gap-2">
                        <div
                            className="m-1 h-4 w-4"
                            style={{
                                backgroundColor: currentColor,
                            }}
                        />
                        <input
                            className="h-6 w-16 border-b-[1px] border-press-7 bg-inherit font-mono text-xs"
                            value={currentColor}
                            onChange={(event) => {
                                const newValue = event.target.value
                                onChange?.(newValue)
                                setCurrentColor(newValue)
                            }}
                        />
                    </div>
                </label>
            )
        }
    }
}

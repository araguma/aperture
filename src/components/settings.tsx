import React, { ReactElement } from 'react'

import Icon from '@/components/icon'
import Input, { InputProps } from '@/components/input'
import Typography from '@/components/typography'
import cx from '@/libs/variance'

export type SettingsProps = React.JSX.IntrinsicElements['div']

export default function Settings({ className, ...props }: SettingsProps) {
    return <div {...props} className={cx('flex flex-col gap-4', className)} />
}

export type FieldProps = InputProps & {
    label: string
}

const fieldIconMap: Record<FieldProps['type'], ReactElement> = {
    color: <Icon icon="drop" />,
    number: <Icon icon="number" />,
    toggle: <Icon icon="boolean" />,
}

Settings.Field = function ({ className, label, ...props }: FieldProps) {
    return (
        <div className="flex place-items-center gap-2">
            <div className="grid h-6 w-6 place-items-center">
                {fieldIconMap[props.type]}
            </div>
            <Typography className="w-40">{label}</Typography>
            <Input
                {...props}
                className={cx(
                    {
                        'ml-8': props.type !== 'color',
                    },
                    className,
                )}
            />
        </div>
    )
}

import cx from '@/libs/variance'

export type DividerProps = React.JSX.IntrinsicElements['div'] & {
    orientation: 'horizontal' | 'vertical'
    length?: string
}

export default function Divider({
    orientation = 'horizontal',
    length,
    className,
    ...props
}: DividerProps) {
    switch (orientation) {
        case 'horizontal':
            return (
                <div
                    {...props}
                    className={cx(
                        'my-2 inline-block h-0 border-t-[1px] border-press-7',
                        className,
                    )}
                    style={{
                        width: length ?? '100%',
                        ...props.style,
                    }}
                ></div>
            )
        case 'vertical':
            return (
                <div
                    {...props}
                    className={cx(
                        'mx-2 inline-block w-0 border-r-[1px] border-press-7',
                        className,
                    )}
                    style={{
                        height: length ?? '100%',
                        ...props.style,
                    }}
                ></div>
            )
        default:
            return null
    }
}

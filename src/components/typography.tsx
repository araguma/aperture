import { VariantProps, cva } from 'class-variance-authority'

import cx from '@/libs/variance'

export type TypographyProps = React.JSX.IntrinsicElements['span'] &
    VariantProps<typeof typographyVariants>

const typographyVariants = cva([], {
    variants: {
        font: {
            serif: ['font-serif'],
            sans: ['font-sans'],
            mono: ['font-mono'],
        },
        size: {
            heading: ['text-3xl'],
            body: ['text-xs'],
        },
    },
    defaultVariants: {
        font: 'sans',
        size: 'body',
    },
})

export default function Typography({ className, ...props }: TypographyProps) {
    return (
        <span {...props} className={cx(typographyVariants(props), className)} />
    )
}

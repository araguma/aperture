import Divider from '@/components/divider'
import Typography from '@/components/typography'
import cx from '@/libs/variance'

export type SidebarProps = React.JSX.IntrinsicElements['div'] & {
    version: string
    rank: string
}

export default function Sidebar({
    version,
    rank,
    className,
    ...props
}: SidebarProps) {
    return (
        <div
            {...props}
            className={cx(
                'absolute bottom-6 left-6 flex select-none flex-row-reverse gap-2 [writing-mode:vertical-rl]',
                className,
            )}
        >
            <Typography font="mono" size="body">
                {version}
            </Typography>
            <Divider orientation="vertical" length="4rem" />
            <Typography font="mono" size="body">
                {rank}
            </Typography>
        </div>
    )
}

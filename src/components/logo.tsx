import Typography from '@/components/typography'
import cx from '@/libs/variance'

export type LogoProps = React.JSX.IntrinsicElements['div']

export default function Logo({ className, ...props }: LogoProps) {
    return (
        <div {...props} className={cx('flex items-center gap-2', className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="fill-current"
            >
                <path d="M9.92 10.8L13.736 4.192C13.176 4.072 12.6 4 12 4C10.08 4 8.32 4.68 6.944 5.8L9.872 10.88L9.92 10.8ZM19.632 9.6C18.896 7.264 17.112 5.392 14.832 4.528L11.904 9.6H19.632ZM19.84 10.4H13.848L14.08 10.8L17.888 17.4C19.2 15.976 20 14.088 20 12C20 11.448 19.944 10.92 19.84 10.4ZM9.232 12L6.112 6.6C4.808 8.024 4 9.912 4 12C4 12.552 4.056 13.08 4.16 13.6H10.152L9.232 12ZM4.368 14.4C5.104 16.736 6.888 18.608 9.168 19.472L12.096 14.4H4.368ZM13.384 14.4L10.264 19.808C10.824 19.928 11.4 20 12 20C13.92 20 15.68 19.32 17.056 18.2L14.128 13.12L13.384 14.4Z" />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9}
                height={15}
                className="stroke-current"
            >
                <path d="m.567 14.406 8-13.857" />
            </svg>
            <Typography font="mono" className="select-none">
                Aperture
            </Typography>
        </div>
    )
}

import { useTheme } from 'next-themes'

import Button, { ButtonProps } from '@/components/button'
import Icon from '@/components/icon'
import { Optional } from '@/types/aperture'

export type SourceButtonProps = Optional<ButtonProps, 'variant'>

export default function Theme({ ...props }: SourceButtonProps) {
    const { theme, setTheme } = useTheme()

    function toggleLightTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Button variant="icon" onClick={toggleLightTheme} {...props}>
            <Icon icon="sun" className="grid dark:hidden" />
            <Icon icon="moon" className="hidden dark:grid" />
        </Button>
    )
}

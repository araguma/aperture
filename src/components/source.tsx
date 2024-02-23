
import Button, { ButtonProps } from '@/components/button'
import { Optional } from '@/types/aperture'
import Icon from '@/components/icon'

export type SourceButtonProps = Optional<ButtonProps, 'variant'>

const sourceUrl = 'https://github.com/araguma/aperture'

export default function Source({ ...props }: SourceButtonProps) {
    function openSource() {
        window.open(sourceUrl, '_blank', 'noreferrer')
    }

    return (
        <Button variant="icon" onClick={openSource} {...props}>
            <Icon icon="github" />
        </Button>
    )
}

import Logo from '@/components/logo'
import Share from '@/components/share'
import Source from '@/components/source'
import Theme from '@/components/theme'
import Version from '@/components/version'

export default function Header() {
    return (
        <>
            <Logo className="absolute left-6 top-6 z-10" />
            <div className="absolute right-6 top-6 z-10 flex items-center gap-4">
                <Version />
                <Share />
                <Theme />
                <Source />
            </div>
        </>
    )
}

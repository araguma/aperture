import { useBackground } from '@/providers/background-provider'

const width = 128

export default function Background() {
    const { prev, text } = useBackground()

    return (
        <svg
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
        >
            <pattern
                id="row1"
                width={(prev.length + 1) * width}
                height="320"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-15)"
            >
                <text
                    key={text + prev}
                    x="0"
                    y="240"
                    className="c scale-y-0 animate-roll-out fill-press-1 font-mono text-[256px] font-bold"
                >
                    {prev}
                </text>
            </pattern>
            <pattern
                id="row2"
                width={(text.length + 1) * width}
                height="320"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-15)"
            >
                <text
                    key={text + prev}
                    x="0"
                    y="240"
                    className="transform animate-roll-in fill-press-1 font-mono text-[256px] font-bold"
                >
                    {text}
                </text>
            </pattern>
            <rect width="100%" height="100%" fill="url(#row1)" />
            <rect width="100%" height="100%" fill="url(#row2)" />
        </svg>
    )
}

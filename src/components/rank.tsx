import Button from '@/components/button'
import Typography from '@/components/typography'
import { ranks } from '@/data/aperture'
import { useQuery } from '@/providers/query-provider'

export default function Rank() {
    const { rank: currentRank, setRank } = useQuery()

    return (
        <div>
            {ranks.map((rank) => {
                return (
                    <Button
                        key={rank}
                        variant="icon"
                        state={rank === currentRank ? 'active' : 'inactive'}
                        onClick={() => {
                            setRank(rank)
                        }}
                    >
                        <Typography font="mono" size="body">
                            {rank}
                        </Typography>
                    </Button>
                )
            })}
        </div>
    )
}

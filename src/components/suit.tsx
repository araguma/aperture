import Button from '@/components/button'
import Icon from '@/components/icon'
import { suits } from '@/data/aperture'
import { useQuery } from '@/providers/query-provider'

export default function Suit() {
    const { suit: currentSuit, setSuit } = useQuery()

    return (
        <div>
            {suits.map((suit) => {
                return (
                    <Button
                        key={suit}
                        variant="icon"
                        state={suit === currentSuit ? 'active' : 'inactive'}
                        onClick={() => {
                            setSuit(suit)
                        }}
                    >
                        <Icon icon={suit} />
                    </Button>
                )
            })}
        </div>
    )
}

import { Card, CardContent } from '@/components/ui/card';
import { IconPlushCount } from './icon-plush-count';
import { StatCard } from '@/lib/constants';

export function CardStateTile(cardStateData: {
  stat: StatCard;
  index: number;
}) {
  return (
    <Card
      key={cardStateData?.index}
      className='p-6 bg-gradient-to-tr from-white/12 via-white/12 to-[rgba(0,8,153,0.6)] h-[100px] border-none rounded-[32px] overflow-hidden shadow-lg'
    >
      <CardContent className='p-0 flex items-center gap-8'>
        <IconPlushCount
          icon={cardStateData?.stat?.icon}
          title={cardStateData?.stat?.title}
          value={cardStateData?.stat?.value}
        />
      </CardContent>
    </Card>
  );
}

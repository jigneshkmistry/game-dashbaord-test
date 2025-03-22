import { StatCard } from '@/lib/constants';
import Icon from './ui/icon';

export function IconPlushCount(iconCountData: StatCard) {
  return (
    <>
      <Icon iconName={iconCountData?.icon} />
      <div>
        <div className='text-2xl font-bold text-white'>
          {iconCountData?.value}
        </div>
        <div className='text-sm text-gray-200'>{iconCountData?.title}</div>
      </div>
    </>
  );
}

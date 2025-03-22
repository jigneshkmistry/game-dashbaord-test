import { StatCard } from '@/lib/constants';
import { CardStateTile } from './card-state-tile';

export function StatCards({ statsData }: { statsData: StatCard[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-6'>
      {statsData.map((stat, index) => (
        <CardStateTile index={index} stat={stat} />
      ))}
    </div>
  );
}

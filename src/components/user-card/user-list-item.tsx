import { GradientBorder } from '../ui/gradient-border';
import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';
import { getBadgeColor } from '@/lib/utils';
import { UserItem } from '@/lib/constants';

export function UserListItem(listItemdata: { user: UserItem; index: number }) {
  return (
    <>
      <div
        key={listItemdata?.index}
        className='flex items-center justify-between'
      >
        <div className='flex items-center gap-2'>
          <GradientBorder
            gradient={'blue'}
            className='h-8 w-8 rounded-full p-0 flex justify-center items-center'
          >
            <img
              src={
                listItemdata?.user?.img || '/placeholder.svg?height=32&width=32'
              }
              className='w-4 h-4'
              alt='User'
            />
          </GradientBorder>
          <div className='text-sm'>
            <div className='text-white'>{listItemdata?.user?.username}</div>
            <div className='text-xs text-gray-400'>
              {listItemdata?.user?.date}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-start gap-2'>
          {listItemdata?.user?.badge && (
            <Badge
              className={`rounded-full p-2 text-black text-[14px]/[100%] font-semibold ${getBadgeColor(
                listItemdata?.user?.badge
              )}`}
            >
              {listItemdata?.user?.badge}
            </Badge>
          )}
          <div className='text-right text-sm'>
            <div className='flex items-center text-white'>
              {listItemdata?.user?.isImage ? (
                <img src={'/assets/Ocoin.png'} className='w-4 h-4 mr-[2px]' alt='User' />
              ) : (
                <Flame className='h-4 w-4 mr-1 fill-white' />
              )}
              {listItemdata?.user?.value}
            </div>
            <div className='text-xs text-gray-400'>
              {listItemdata?.user?.label}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { GradientBorder } from '../ui/gradient-border';

export default function HeaderUserPanel({
  user,
}: {
  user: { name: string; email: string; img: string };
}) {
  return (
    <GradientBorder
      gradient={'blue'}
      className='flex items-center gap-2 bg-[#4a3a7a] rounded-full'
    >
      <div className='text-sm'>
        <div className='font-medium text-white'>{user?.name}</div>
        <div className='text-xs text-gray-400'>{user?.email}</div>
      </div>
      <div className='absolute right-[-15px]'>
        <img src={user?.img} className='w-18' alt='Admin' />
      </div>
      <div className='w-8'></div>
    </GradientBorder>
  );
}

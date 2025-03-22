import { LucideIcon } from 'lucide-react';

export function IconComponent(iconData: { icon: LucideIcon }) {
  return (
    <div className='h-10 w-10 rounded-full flex items-center justify-center border-1 border-[#ff4ae763]'>
      <iconData.icon className='h-5 w-5 fill-white' stroke='#eee' />
    </div>
  );
}

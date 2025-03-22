import HeaderUserPanel from '@/components/header/HeaderUserPanel';
import HeaderTitle from '@/components/header/HeaderTitle';
import Icon from '@/components/ui/icon';
import SidebarTrigger from '@/components/sidebar/SidebarTrigger';
import { Separator } from '@/components/ui/separator';

export function Header() {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 px-4'>
      <SidebarTrigger className='-ml-1 text-white' />
      <Separator orientation='vertical' className='mr-2 h-4 bg-borderColor' />
      <div className='w-full flex justify-between items-center z-10'>
        <HeaderTitle title='General Statistics' />
        <div className='flex items-center gap-4'>
          <Icon iconName='bell' withGradient />
          <HeaderUserPanel
            user={{ name: 'Admin Name', email: '@adminname', img: '/assets/admin.png' }}
          />
        </div>
      </div>
    </header>
  );
}

import { cn } from '@/lib/utils';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenuButton from './SidebarMenuButton';
import { NavItem } from '@/lib/constants';
import {  ChevronDown } from 'lucide-react';
import Icon from '@/components/ui/icon';
import { DropDownComponent } from '../ui/dropDownComponent';

export default function SidebarMenu({
  className,
  list,
  withDropdown,
  ...props
}: React.ComponentProps<'ul'> & {
  list?: NavItem[];
  withDropdown?: boolean;
}) {
  return (
    <>
      {list ? (
        <ul
          data-slot='sidebar-menu'
          data-sidebar='menu'
          className={cn('flex w-full min-w-0 flex-col gap-1', className)}
          {...props}
        >
          {list?.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className='w-full my-1 justify-start text-white text-sm rounded-full py-5 hover:bg-[#5a4a8a]
           hover:text-white data-[active=true]:bg-[#4a3a7a] data-[active=true]:!border-white data-[active=true]:border-2 data-[active=true]:text-white'
                tooltip={item.title}
              >
                <p className='text-white'>
                  <Icon iconName={item.icon} />
                  <span>{item.title}</span>
                </p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </ul>
      ) : withDropdown ? (
        <SidebarMenuItem>
          <DropDownComponent
            label='This Month'
            items={['This Week', 'This Month', 'This Year']}
            icon={<ChevronDown className='ml-2 h-4 w-4' />}
            startIcon={<Icon iconName={'calender'} />}
          />
        </SidebarMenuItem>
      ) : null}
    </>
  );
}

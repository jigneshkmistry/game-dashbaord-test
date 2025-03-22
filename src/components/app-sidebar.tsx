import type * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mainNavItems, bottomNavItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/sidebar/Sidebar';
import SidebarHeader from '@/components/sidebar/SidebarHeader';
import SidebarFooter from '@/components/sidebar/SidebarFooter';
import SidebarContent from '@/components/sidebar/SidebarContent';
import SidebarMenu from '@/components/sidebar/SidebarMenu';

export function AppSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className={cn('border-r border-transparent bg-transparent', className)}
      {...props}
    >
      <SidebarHeader className='p-4'>
        <Avatar className='h-10 w-10 object-contain'>
          <AvatarImage src='/assets/logo.png' className='' alt='Logo' />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </SidebarHeader>
      <SidebarContent className='px-5'>
        <SidebarMenu list={mainNavItems} />
      </SidebarContent>
      <SidebarFooter className='px-5'>
        <SidebarMenu list={bottomNavItems} />
      </SidebarFooter>
    </Sidebar>
  );
}

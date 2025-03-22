import { cn } from '@/lib/utils';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenuButton from './SidebarMenuButton';
import { NavItem } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react';
import Icon from '@/components/ui/icon';

export default function SidebarMenu({
  className,
  list,
  withDropdown,
  dropdownConfig,
  ...props
}: React.ComponentProps<'ul'> & {
  list?: NavItem[];
  withDropdown?: boolean;
  dropdownConfig?: {
    versions: string[];
    defaultVersion: string;
    selectedVersion: string;
    setSelectedVersion: (args: string) => void;
  };
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size='lg'
                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
              >
                <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                  <GalleryVerticalEnd className='size-4' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-medium'>Documentation</span>
                  <span className=''>v{dropdownConfig?.selectedVersion}</span>
                </div>
                <ChevronsUpDown className='ml-auto' />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-(--radix-dropdown-menu-trigger-width)'
              align='start'
            >
              {dropdownConfig?.versions.map((version) => (
                <DropdownMenuItem
                  key={version}
                  onSelect={() => dropdownConfig?.setSelectedVersion(version)}
                >
                  v{version}{' '}
                  {version === dropdownConfig?.selectedVersion && (
                    <Check className='ml-auto' />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      ) : null}
    </>
  );
}

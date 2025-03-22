import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/sidebar/SidebarProvider';
import SidebarInset from '@/components/sidebar/SidebarInset';
import { Header } from '@/components/header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='bg-transparent'>
        <Header />
        <main className='flex-1 overflow-auto pb-6'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

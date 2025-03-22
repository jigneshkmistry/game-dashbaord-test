import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { FinancialOverview } from "@/components/financial-overview"
import { OcoinSpending } from "@/components/ocoin-spending"
import { ProductLists } from "@/components/product-lists"
import { StatCards } from "@/components/stat-cards"
import { UserLists } from "@/components/user-lists"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function Dashboard() {
  return (
    <div className="text-white">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#2D1B69]">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-[#4a3a7a]/30 px-4">
            <SidebarTrigger className="-ml-1 text-white" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-[#4a3a7a]/50" />
            <DashboardHeader />
          </header>
          <div className="flex-1 overflow-auto">
            <div className="pb-6">
              <StatCards />
              <UserLists />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 mb-6">
                <FinancialOverview />
                <OcoinSpending />
              </div>
              <ProductLists />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}


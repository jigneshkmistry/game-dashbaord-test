import type * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { mainNavItems, bottomNavItems } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function AppSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className={cn("border-r border-[#4a3a7a]/30 bg-[#2D1B69]", className)} {...props}>
      <SidebarHeader className="p-4 bg-[#2D1B69]">
        <Avatar className="h-10 w-10 object-contain">
          <AvatarImage src="/assets/logo.png" className=""  alt="Logo" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </SidebarHeader>
      <SidebarContent className="px-5 bg-[#2D1B69]">
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="w-full my-1 bg-[#2D1B69] justify-start text-white text-sm rounded-full py-5 hover:bg-[#5a4a8a]
                 hover:text-white data-[active=true]:bg-[#4a3a7a] data-[active=true]:!border-white data-[active=true]:border-2 data-[active=true]:text-white"
                tooltip={item.title}
              >
                <p className="text-white">
                  <item.icon className="mx-2 !h-6 !w-6" />
                  <span>{item.title}</span>
                </p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="px-5 bg-[#2D1B69]">
        <SidebarMenu>
          {bottomNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="w-full my-1 bg-[#2D1B69] justify-start text-white text-sm rounded-full py-5 hover:bg-[#5a4a8a]
                 hover:text-white data-[active=true]:bg-[#4a3a7a] data-[active=true]:!border-white data-[active=true]:border-2 data-[active=true]:text-white"
                tooltip={item.title}
              >
                <p className="text-white">
                  <item.icon className="mx-2 !h-6 !w-6" />
                  <span>{item.title}</span>
                </p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}


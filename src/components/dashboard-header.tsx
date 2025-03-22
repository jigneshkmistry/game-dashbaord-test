import { Bell } from "lucide-react"
import { GradientBorder } from "./ui/gradient-border"

export function DashboardHeader() {
  return (
    <header className="w-full flex justify-between items-center z-10 bg-[#2D1B69]">
      <h1 className="text-2xl font-bold text-white">General Statistics</h1>
      <div className="flex items-center gap-4">
        <GradientBorder gradient={'blue'} className="h-10 w-10 flex justify-center items-center m-[.4px]">
        <Bell className="h-5 w-5 text-white" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </GradientBorder>
  
        <GradientBorder gradient={'blue'} className="flex items-center gap-2 bg-[#4a3a7a] rounded-full"> 
        <div className="text-sm">
            <div className="font-medium text-white">Admin Name</div>
            <div className="text-xs text-gray-400">@adminname</div>
          </div>

          <div className="absolute right-[-15px]">
          <img src="/assets/admin.png" className="w-18" alt="Admin"  />
          </div>
          <div className="w-8"></div>
          </GradientBorder>  
      </div>
    </header>
  )
}


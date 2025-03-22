import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { financialData } from "@/lib/constants"
import { GradientBorder } from "./ui/gradient-border"

export function FinancialOverview() {
  return (
    <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold text-white">Financial Overview</h2>
            <p className="text-xs text-gray-200">You can track all users data here</p>
          </div>
         
          <DropdownMenu>
            <DropdownMenuTrigger>
            <GradientBorder className="p-0" >
              <Button variant="outline" className="bg-[#4a3a7a]/50 border-none text-white">
                This Month <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              </GradientBorder>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>This Week</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>This Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 h-full">
          <div className="flex flex-col justify-between h-full">
            {financialData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`${item.color} h-10 w-10 rounded-full flex items-center justify-center`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-gray-200">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <svg viewBox="0 0 100 100" width="160" height="160">
              <defs>
                <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#be185d" />
                </linearGradient>
                <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
              {/* Cyan segment - 33% */}
              <path d="M 50 50 L 100 50 A 50 50 0 0 1 75 93.3 Z" fill="url(#cyan-gradient)" />
              {/* Pink segment - 30% */}
              <path d="M 50 50 L 75 93.3 A 50 50 0 0 1 25 93.3 Z" fill="url(#pink-gradient)" />
              {/* Orange segment - 37% */}
              <path
                d="M 50 50 L 25 93.3 A 50 50 0 0 1 0 50 A 50 50 0 0 1 50 0 A 50 50 0 0 1 100 50 Z"
                fill="url(#orange-gradient)"
              />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


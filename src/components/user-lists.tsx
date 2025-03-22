import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {  Flame } from "lucide-react"
import { hallOfFarmers, allStars, theBench } from "@/lib/constants"
import { GradientBorder } from "./ui/gradient-border"

function getBadgeColor(badge: string) {
  switch (badge) {
    case "Explorer":
      return "bg-[#61D2FF]"
    case "Creator":
      return "bg-[#FFE175]"
    case "Designer":
      return "bg-[#00FFF0]"
    case "Visionary":
      return "bg-[#FAADFF]"
    default:
      return "bg-gray-500/80"
  }
}

export function UserLists() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 mb-6">
      {/* Hall of farmers */}
      <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
        <CardContent className="px-4 py-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-white text-sm">Hall of farmers - Top Remixers</h2>
            <GradientBorder >View all</GradientBorder>
          </div>

          <div className="space-y-4">
            {hallOfFarmers.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GradientBorder gradient={'blue'} className="h-8 w-8 rounded-full p-0 flex justify-center items-center">
                  <img src={user.img || "/placeholder.svg?height=32&width=32"} className="w-4 h-4" alt="User"  />
                  </GradientBorder>
                  <div className="text-sm">
                    <div className="text-white">{user.username}</div>
                    <div className="text-xs text-gray-400">{user.date}</div>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="flex items-center text-white">
                    <img src="/assets/Ocoin.png" className="mr-1 object-contain " />
                    {user.value}
                  </div>
                  <div className="text-xs text-gray-400">{user.label}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Stars */}
      <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-white text-sm">All Stars - Loyal Subscribers</h2>
            <GradientBorder >View all</GradientBorder>  
          </div>

          <div className="space-y-4">
            {allStars.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <GradientBorder gradient={'blue'} className="h-8 w-8 rounded-full p-0 flex justify-center items-center">
                  <img src={user.img || "/placeholder.svg?height=32&width=32"} className="w-4 h-4" alt="User"  />
                  </GradientBorder>
                  <div className="text-sm">
                    <div className="text-white">{user.username}</div>
                    <div className="text-xs text-gray-400">{user.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {user.badge && (
                    <Badge className={`rounded-full px-3 text-black font-semibold ${getBadgeColor(user.badge)}`}>{user.badge}</Badge>
                  )}
                  <div className="text-right text-sm">
                    <div className="flex items-center text-white">
                      <Flame  className="h-4 w-4 mr-1 fill-white" />
                      {user.value}
                    </div>
                    <div className="text-xs text-gray-400">{user.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* The Bench */}
      <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-white text-sm">The Bench - Unsubscribed Users</h2>
            <GradientBorder >View all</GradientBorder> 
          </div>

          <div className="space-y-4">
            {theBench.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <GradientBorder gradient={'blue'} className="h-8 w-8 rounded-full p-0 flex justify-center items-center">
                  <img src={user.img || "/placeholder.svg?height=32&width=32"} className="w-4 h-4" alt="User"  />
                  </GradientBorder>
                  <div className="text-sm">
                    <div className="text-white">{user.username}</div>
                    <div className="text-xs text-gray-400">{user.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {user.badge && (
                    <Badge className={`rounded-full px-3 text-black font-semibold ${getBadgeColor(user.badge)}`}>{user.badge}</Badge>
                  )}
                  <div className="text-right text-sm">
                    <div className="flex items-center text-white">
                      <Flame  className="h-4 w-4 mr-1 fill-white" />
                      {user.value}
                    </div>
                    <div className="text-xs text-gray-400">{user.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


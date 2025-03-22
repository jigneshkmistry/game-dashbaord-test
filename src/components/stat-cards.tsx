import { Card, CardContent } from "@/components/ui/card"
import { statsData } from "@/lib/constants"

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-6">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className="py-3 bg-gradient-to-tr from-white/12 via-white/12 to-[rgba(0,8,153,0.6)] border-none rounded-xl overflow-hidden shadow-lg"
        >
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center border-1 border-[#ff4ae763]">
              <stat.icon className="h-5 w-5 fill-white" stroke="#eee"/>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.title}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


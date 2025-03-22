import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { ocoinSpendingData } from "@/lib/constants"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { GradientBorder } from "./ui/gradient-border"

export function OcoinSpending() {
  // Transform the data for the chart
  const chartData = ocoinSpendingData.map((item) => ({
    name: item.label,
    value: item.value * 1000, // Scale up the values to match the 100K-400K range
  }))

  return (
    <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold text-white text-sm">Ocoin Spending Pattern</h2>
            <p className="text-xs text-gray-200">You can track all Ocoin spending data here</p>
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

        <div className="h-[270px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 30, right: 10, left: 10, bottom: 20 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#4a3a7a" strokeDasharray="3 3" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#fff", fontSize: 12 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}K`)}
                domain={[0, 400000]}
                ticks={[0, 100000, 200000, 300000, 400000]}
              />
              <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} barSize={40} shape={<CustomBar />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// Custom bar component to add the coin icon on top
const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={8} ry={8} />
      <foreignObject x={x + width / 2 - 12} y={y - 24} width={24} height={24}>
          <img src="/assets/Ocoin.png" className="w-10" />
      </foreignObject>
    </g>
  )
}


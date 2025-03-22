import { Card, CardContent } from "@/components/ui/card"
import { CopyCheck, Download, Eye, LayoutGrid } from "lucide-react"
import { remixedProducts, topUsedApps } from "@/lib/constants"
import { GradientBorder } from "./ui/gradient-border"

export function ProductLists() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 mb-6">
      {/* Most remixed products */}
      <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-white text-sm">Most remixed products</h2>
            <GradientBorder >View all</GradientBorder> 
          </div>

          <div className="space-y-4">
            {remixedProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-4">
                <GradientBorder gradient={"pink"} className="h-24 w-20 bg-[#3a2f6c] rounded-lg flex justify-center items-center shadow-lg mr-[1px]">
                 <img src={product.imageUrl} className="scale-150" alt="" />
                </GradientBorder> 

                <div className="flex-1">
                  <div className="font-medium text-white text-sm">{product.name}</div>
                  <div className="text-xs text-gray-400">{product.date}</div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-start text-white">
                      <CopyCheck className="h-4 w-4 mr-1" />
                      {product.timeRemixed}
                    </div>
                    <div className="text-xs text-gray-400">Time Remixed</div>
                  </div>

                  <div className="text-centerflex flex-col">
                    <div className="flex items-center justify-start text-white">
                      <Download className="h-4 w-4 mr-1" />
                      {product.downloads}
                    </div>
                    <div className="text-xs text-gray-400">Download</div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center justify-start text-white">
                      <Eye className="h-4 w-4 mr-1" />
                      {product.views}
                    </div>
                    <div className="text-xs text-gray-400">Views</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top used apps */}
      <Card className="py-0 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-xl overflow-hidden shadow-lg border-[#2D1B69]">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-white text-sm">Top used apps</h2>
            <GradientBorder >View all</GradientBorder> 
          </div>

          <div className="space-y-4">
            {topUsedApps.map((app, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <GradientBorder gradient={'blue'} className="h-8 w-8 p-0 m-[.5px] rounded-full flex justify-center items-center">
                   <div className="h-5 w-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
                   </GradientBorder>
                  
                  <div>
                    <div className="font-medium text-white">{app.name}</div>
                    <div className="text-xs text-gray-400">{app.date}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center text-white">
                    <LayoutGrid  className="h-4 w-4 mr-1" />
                    {app.timeUsed}
                  </div>
                  <div className="text-xs text-gray-400">Time Used</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


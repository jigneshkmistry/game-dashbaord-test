import { AppUsageItem } from "@/lib/constants";
import { GradientBorder } from "../ui/gradient-border";
import { LayoutGrid } from "lucide-react";
import Icon from "../ui/icon";

export function AppListItem(appItem:{app:AppUsageItem,index:number}) {
    return(<div key={appItem?.index} className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <GradientBorder
            gradient={'blue'}
            className='h-8 w-8 p-0 m-[.5px] rounded-full flex justify-center items-center'
          >
            <div className='h-5 w-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600'></div>
          </GradientBorder>

          <div>
            <div className='font-medium text-white'>{appItem?.app?.name}</div>
            <div className='text-xs text-gray-400'>{appItem?.app?.date}</div>
          </div>
        </div>

        <div className='text-right'>
          <div className='flex items-center text-white gap-[8px]'>
          <Icon iconName={'fourBox'} />
            {appItem?.app?.timeUsed}
          </div>
          <div className='text-xs text-gray-400'>Time Used</div>
        </div>
      </div>)
}
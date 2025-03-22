import { AppUsageItem } from "@/lib/constants";
import { AppListItem } from "./app-list-item";

export function AppCardBody({topUsedApps}:{topUsedApps:AppUsageItem[]}) {
  return (
    <div className='space-y-4'>
      {topUsedApps.map((app, index) => (
        <AppListItem app={app} index={index}/>
      ))}
    </div>
  );
}

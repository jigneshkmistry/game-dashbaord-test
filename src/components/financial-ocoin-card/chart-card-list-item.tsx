import { FinancialItem } from "@/lib/constants";
import Icon from "../ui/icon";

export function ChartCardListItem(chartListItemdata: {
    item: FinancialItem;
  index: number;
}) {
  return (
    <div key={chartListItemdata?.index} className='flex items-center gap-3'>
      <div
        className={`${chartListItemdata?.item?.color} h-10 w-10 rounded-full flex items-center justify-center`}
      >
        <Icon iconName={chartListItemdata.item.icon} />
      </div>
      <div>
        <div className='text-xl font-bold text-white'>{chartListItemdata?.item?.value}</div>
        <div className='text-xs text-gray-200'>{chartListItemdata?.item?.description}</div>
      </div>
    </div>
  );
}

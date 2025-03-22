import { ProductItem } from "@/lib/constants";
import { GradientBorder } from "../ui/gradient-border";
import Icon from "../ui/icon";

export function ProductListItem(productItem:{product:ProductItem,index:number}) {
  return (
    <div key={productItem?.index} className='flex items-center gap-4'>
      <GradientBorder
        gradient={'pink'}
        className='h-24 w-20 bg-[#3a2f6c] rounded-lg flex justify-center items-center shadow-lg mr-[1px]'
      >
        <img src={productItem?.product?.imageUrl} className='scale-150' alt='' />
      </GradientBorder>

      <div className='flex-1'>
        <div className='font-medium text-white text-sm'>{productItem?.product?.name}</div>
        <div className='text-xs text-gray-400'>{productItem?.product?.date}</div>
      </div>

      <div className='flex items-center gap-6'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-start text-white gap-[8px]'>
          <Icon iconName={'checkBoxCheked'} />
            {productItem?.product?.timeRemixed}
          </div>
          <div className='text-xs text-gray-400'>Time Remixed</div>
        </div>

        <div className='text-centerflex flex-col'>
          <div className='flex items-center justify-start text-white gap-[7px]'>
          <Icon iconName={'download'} />
            {productItem?.product?.downloads}
          </div>
          <div className='text-xs text-gray-400'>Download</div>
        </div>

        <div className='flex flex-col'>
          <div className='flex items-center justify-start text-white gap-[8px]'>
          <Icon iconName={'eye'} />
            {productItem?.product?.views}
          </div>
          <div className='text-xs text-gray-400'>Views</div>
        </div>
      </div>
    </div>
  );
}

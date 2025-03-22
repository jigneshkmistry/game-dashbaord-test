import { ReactNode } from 'react';

export function ChartCardHeader(chartHeaderData: {
  headerTitle: string;
  headerDiscription: string;
  headerAction: ReactNode;
}) {
  return (
    <div className='flex justify-between items-center mb-2'>
      <div>
        <h2 className='font-semibold text-white'>
          {chartHeaderData?.headerTitle}
        </h2>
        <p className='text-xs text-gray-200'>
          {chartHeaderData?.headerDiscription}
        </p>
      </div>
      {chartHeaderData?.headerAction}
    </div>
  );
}

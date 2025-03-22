import { ReactNode } from 'react';

export function UserCardHeader(headerData: {
  headerTitle: string;
  headerAction: ReactNode;
}) {
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-semibold text-white text-sm'>
          {headerData?.headerTitle}
        </h2>
        {headerData?.headerAction}
      </div>
    </>
  );
}

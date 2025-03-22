import { ReactNode } from "react";

export function ProductAppCardHeader(productAppHeaderData: {
  headerTitle: string;
  headerAction: ReactNode;
}) {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h2 className='font-semibold text-white text-sm'>
        {productAppHeaderData?.headerTitle}
      </h2>
      {productAppHeaderData?.headerAction}
    </div>
  );
}

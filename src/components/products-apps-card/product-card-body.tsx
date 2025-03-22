import { ProductItem } from "@/lib/constants";

import { ProductListItem } from "./product-list-item";

export function ProductCardBody({remixedProducts}:{remixedProducts:ProductItem[]}) {
  return (
    <div className='space-y-4'>
      {remixedProducts.map((product, index) => (
        <ProductListItem index={index} product={product}/>
      ))}
    </div>
  );
}

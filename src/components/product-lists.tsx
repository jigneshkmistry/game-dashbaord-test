import { remixedProducts, topUsedApps } from "@/lib/constants"
import { GradientBorder } from "./ui/gradient-border"
import { ProductAppCardMain } from "./products-apps-card/product-app-card-main"
import { ProductCardBody } from "./products-apps-card/product-card-body"
import { AppCardBody } from "./products-apps-card/app-card-body"

export function ProductLists() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 mb-6'>
      {/* Most remixed products */}
      <ProductAppCardMain
        headerTitle={'Most remixed products'}
        headerAction={<GradientBorder>View all</GradientBorder>}
        productAppBody={<ProductCardBody remixedProducts={remixedProducts} />}
      />

      {/* Top used apps */}
      <ProductAppCardMain
        headerTitle={'Top used apps'}
        headerAction={<GradientBorder>View all</GradientBorder>}
        productAppBody={<AppCardBody topUsedApps={topUsedApps} />}
      />
    </div>
  );
}


import { Card, CardContent } from "@/components/ui/card"
import { ProductAppCardHeader } from "./product-app-card-header";
import { JSX, ReactNode } from "react";
export function ProductAppCardMain(productAppData:{
  headerTitle: string;
  headerAction: ReactNode;
  productAppBody:JSX.Element;
}) {
  return (
    <Card className='p-6 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-[32px] overflow-hidden shadow-lg border-[#2D1B69]'>
      <CardContent className='p-0'>
        <ProductAppCardHeader headerTitle={productAppData?.headerTitle} headerAction={productAppData?.headerAction}/>
        {productAppData?.productAppBody}
      </CardContent>
    </Card>
  );
}

import { JSX, ReactNode } from 'react';
import { Card, CardContent } from '../ui/card';
import { ChartCardHeader } from './chart-card-header';

export function ChartCardMain(chartCardMainData: {
  headerTitle: string;
  headerDiscription: string;
  headerAction: ReactNode;
  chartMainBody: JSX.Element;
}) {
  return (
    <>
      <Card className='p-6 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-[32px] overflow-hidden shadow-lg border-[#2D1B69]'>
        <CardContent className='p-0'>
          <ChartCardHeader
            headerTitle={chartCardMainData?.headerTitle}
            headerDiscription={chartCardMainData?.headerDiscription}
            headerAction={chartCardMainData?.headerAction}
          />
          {chartCardMainData?.chartMainBody}
        </CardContent>
      </Card>
    </>
  );
}

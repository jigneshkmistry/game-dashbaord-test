import { FinancialItem } from "@/lib/constants";
import { ChartCardListItem } from "./chart-card-list-item";

export function FinancialCardBody({financialData}:{financialData:FinancialItem[]}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 h-full'>
      <div className='flex flex-col justify-between h-full'>
        {financialData.map((item, index) => (
          <ChartCardListItem index={index} item={item}/>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <svg viewBox='0 0 100 100' width='160' height='160'>
          <defs>
            <linearGradient
              id='cyan-gradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#06b6d4' />
              <stop offset='100%' stopColor='#0ea5e9' />
            </linearGradient>
            <linearGradient
              id='pink-gradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#ec4899' />
              <stop offset='100%' stopColor='#be185d' />
            </linearGradient>
            <linearGradient
              id='orange-gradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#f97316' />
              <stop offset='100%' stopColor='#ea580c' />
            </linearGradient>
          </defs>
          {/* Cyan segment - 33% */}
          <path
            d='M 50 50 L 100 50 A 50 50 0 0 1 75 93.3 Z'
            fill='url(#cyan-gradient)'
          />
          {/* Pink segment - 30% */}
          <path
            d='M 50 50 L 75 93.3 A 50 50 0 0 1 25 93.3 Z'
            fill='url(#pink-gradient)'
          />
          {/* Orange segment - 37% */}
          <path
            d='M 50 50 L 25 93.3 A 50 50 0 0 1 0 50 A 50 50 0 0 1 50 0 A 50 50 0 0 1 100 50 Z'
            fill='url(#orange-gradient)'
          />
        </svg>
      </div>
    </div>
  );
}

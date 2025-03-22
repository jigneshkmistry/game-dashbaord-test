import { ocoinSpendingData } from '@/lib/constants';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export function OcoinCardBody() {
  // Transform the data for the chart
  const chartData = ocoinSpendingData.map((item) => ({
    name: item.label,
    value: item.value * 1000, // Scale up the values to match the 100K-400K range
  }));
  return (
    <div className='h-[270px] mt-6'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={chartData}
          margin={{ top: 30, right: 10, left: 10, bottom: 20 }}
        >
          <defs>
            <linearGradient id='barGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#facc15' />
              <stop offset='100%' stopColor='#f97316' />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            stroke='#4a3a7a'
            strokeDasharray='3 3'
          />
          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#fff', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}K`)}
            domain={[0, 400000]}
            ticks={[0, 100000, 200000, 300000, 400000]}
          />
          <Bar
            dataKey='value'
            fill='url(#barGradient)'
            radius={[8, 8, 0, 0]}
            barSize={40}
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
// Custom bar component to add the coin icon on top
const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={8}
        ry={8}
      />
      <foreignObject x={x + width / 2 - 12} y={y - 24} width={24} height={24}>
        <img src='/assets/Ocoin.png' className='w-10' />
      </foreignObject>
    </g>
  );
};

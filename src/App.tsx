import Layout from '@/components/layout';
import { FinancialOverview } from '@/components/financial-overview';
import { OcoinSpending } from '@/components/ocoin-spending';
import { ProductLists } from '@/components/product-lists';
import { StatCards } from '@/components/stat-cards';
import { UserLists } from '@/components/user-lists';
import {
  allStars,
  hallOfFarmers,
  statsData,
  theBench,
  userData,
} from './lib/constants';
import { GradientBorder } from './components/ui/gradient-border';

const useListData: userData = [
  {
    headerTitle: 'Hall of farmers - Top Remixers',
    userList: hallOfFarmers,
    headerAction: <GradientBorder>View all</GradientBorder>,
  },
  {
    headerTitle: 'All Stars - Loyal Subscribers',
    userList: allStars,
    headerAction: <GradientBorder>View all</GradientBorder>,
  },
  {
    headerTitle: 'The Bench - Unsubscribed Users',
    userList: theBench,
    headerAction: <GradientBorder>View all</GradientBorder>,
  },
];

export default function App() {
  return (
    <Layout>
      <StatCards statsData={statsData}/>
      <UserLists useListData={useListData}/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 mb-6'>
        <FinancialOverview />
        <OcoinSpending />
      </div>
      <ProductLists />
    </Layout>
  );
}

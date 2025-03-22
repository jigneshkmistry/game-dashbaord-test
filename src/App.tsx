import Layout from '@/components/layout';
import { FinancialOverview } from '@/components/financial-overview';
import { OcoinSpending } from '@/components/ocoin-spending';
import { ProductLists } from '@/components/product-lists';
import { StatCards } from '@/components/stat-cards';
import { UserLists } from '@/components/user-lists';

export default function App() {
  return (
    <Layout>
      <StatCards />
      <UserLists />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 mb-6'>
        <FinancialOverview />
        <OcoinSpending />
      </div>
      <ProductLists />
    </Layout>
  );
}

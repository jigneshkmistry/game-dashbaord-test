import { ChevronDown } from 'lucide-react';
import { ChartCardMain } from './financial-ocoin-card/chart-card-main';
import { FinancialCardBody } from './financial-ocoin-card/financial-card-body';
import { DropDownComponent } from './ui/dropDownComponent';
import { financialData } from '@/lib/constants';
import Icon from './ui/icon';

export function FinancialOverview() {
  return (
    <ChartCardMain
      headerTitle={'Financial Overview'}
      headerDiscription={'You can track all users data here'}
      headerAction={
        <DropDownComponent
          label='This Month'
          items={['This Week', 'This Month', 'This Year']}
          icon={<ChevronDown className='ml-2 h-4 w-4' />}
          startIcon={<Icon iconName={'calender'} />}
        />
      }
      chartMainBody={<FinancialCardBody financialData={financialData}/>}
    />
  );
}

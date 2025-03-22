import { ChevronDown } from 'lucide-react';
import { ChartCardMain } from './financial-ocoin-card/chart-card-main';
import { OcoinCardBody } from './financial-ocoin-card/ocoin-card-body';
import { DropDownComponent } from './ui/dropDownComponent';
import Icon from './ui/icon';

export function OcoinSpending() {
  return (
    <ChartCardMain
      headerTitle={'Ocoin Spending Pattern'}
      headerDiscription={'You can track all Ocoin spending data here'}
      headerAction={<DropDownComponent
        label='This Month'
        items={['This Week', 'This Month', 'This Year']}
        icon={<ChevronDown className='ml-2 h-4 w-4' />}
        startIcon={<Icon iconName={'calender'} />}
      />}
      chartMainBody={<OcoinCardBody />}
    />
  );
}

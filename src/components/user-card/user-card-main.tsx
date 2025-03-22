import { Card, CardContent } from '@/components/ui/card';
import { UserCardHeader } from './user-card-header';
import { UserCardBody } from './user-card-body';
import { ReactNode } from 'react';
import { UserItem } from '@/lib/constants';

export function UserCardMain(userCardData: {
  headerTitle: string;
  headerAction: ReactNode;
  userList: UserItem[];
  index: number;
}) {
  return (
    <Card
      key={userCardData.index}
      className='p-6 bg-gradient-to-br from-white/10 via-white/10 to-[#000899] rounded-[32px] overflow-hidden shadow-lg border-[#2D1B69]'
    >
      <CardContent className='p-0'>
        <UserCardHeader
          headerTitle={userCardData?.headerTitle}
          headerAction={userCardData?.headerAction}
        />
        <UserCardBody userList={userCardData?.userList} />
      </CardContent>
    </Card>
  );
}

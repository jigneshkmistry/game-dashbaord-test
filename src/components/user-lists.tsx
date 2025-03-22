import { userData } from '@/lib/constants';
import { UserCardMain } from './user-card/user-card-main';

export function UserLists({ useListData }: { useListData: userData }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 mb-6'>
      {useListData?.map((data, index) => (
        <UserCardMain
          index={index}
          headerTitle={data?.headerTitle}
          userList={data?.userList}
          headerAction={data?.headerAction}
        />
      ))}
    </div>
  );
}

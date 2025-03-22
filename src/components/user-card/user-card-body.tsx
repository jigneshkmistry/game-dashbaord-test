import { UserItem } from '@/lib/constants';
import { UserListItem } from './user-list-item';

export function UserCardBody(cardBodyData: { userList: UserItem[] }) {
  return (
    <>
      <div className='space-y-4'>
        {cardBodyData.userList.map((user, index) => (
          <UserListItem index={index} user={user}/>
        ))}
      </div>
    </>
  );
}

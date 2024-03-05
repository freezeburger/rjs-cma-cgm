import { FC } from 'react';
import { useUsers } from './hooks/use-users.hook';
import { User } from './logic/interface';

const UserList: FC<{ collection: User[] }> = ({ collection }) => {
  return (
    <>
      {
        collection.map(user => <div key={user.id}>{user.name}</div>)
      }
    </>
  )
}

const UserLoader: FC<{ collection: User[] }> = ({ collection }) => {
  return (
    <>
      {
        !collection.length && 'Loading'
      }
    </>
  )
}

interface FeatUserProps { }

const FeatUser: FC<FeatUserProps> = () => {

  const { users } = useUsers();

  return (
    <div data-testid="FeatUser">
      <UserList collection={users} />
      <UserLoader collection={users} />
    </div>
  )
};

export default FeatUser;

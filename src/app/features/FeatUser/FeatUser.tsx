import { FC } from 'react';
import { useUsers } from './hooks/use-users.hook';
import { User } from './logic/interface';
import { useData } from './hooks/use-data.hook';

const UserList:FC<{collection:User[]}> = ({collection}) => {
  return(
    <>
     {
        collection.length &&
        collection.map( user => <div key={user.id}>{user.name}</div>)
        || 'Loading'
      }
    </>
  )
}

interface FeatUserProps { }

const FeatUser: FC<FeatUserProps> = () => {

  const {users} = useUsers();

  return (
    <div data-testid="FeatUser">
      <UserList collection={users}/>
    </div>
  )
};

export default FeatUser;

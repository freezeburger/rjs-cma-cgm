import { FC } from 'react';
import { User } from './logic/interface';
import { ActionTypes, useStore } from './store';

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

  // const { users } = useUsers();
  // const users:User[] =[];

  const {state:users, dispatch} = useStore();

  return (
    <div data-testid="FeatUser">
      <button onClick={ () => dispatch({type:ActionTypes.USER_LIST_REQUEST})}>Load List</button>
      <UserList collection={users} />
      <UserLoader collection={users} />
    </div>
  )
};

export default FeatUser;

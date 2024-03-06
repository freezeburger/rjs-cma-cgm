import { FC, useCallback, useDebugValue, useId, useMemo, useState } from 'react';
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

export function useOnlineStatus() {

  const [online] = useState(true)
  useDebugValue('CGM');
  return online;
}

const square = ( n:number ) => {
  console.log('computing')
  return n * n;
} 

const FeatUser: FC<FeatUserProps> = () => {

  // const { users } = useUsers();
  // const users:User[] =[];

  const val = useMemo(()=>square(10),[])

  const {state:users, dispatch} = useStore();

  const online= useOnlineStatus();

  const handleClick = useCallback( () => dispatch({type:ActionTypes.USER_LIST_REQUEST}),[] )
  const fieldId = useId()

  return (
    <div data-testid="FeatUser">

      <label htmlFor={fieldId}>Search</label>
      <input type="text" id={fieldId} />

      <button onClick={ handleClick }>Load List</button>
      <UserList collection={users} />
      <UserLoader collection={users} />
    </div>
  )
};

export default FeatUser;

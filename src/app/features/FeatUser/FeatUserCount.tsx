import { FC } from "react";
// import { useUsers } from "./hooks/use-users.hook";
import { useStore } from "./store";


interface FeatUserCountProps { }

const FeatUserCount: FC<FeatUserCountProps> = () => {

  // const { users } = useUsers();
  const {state:users, /* dispatch */} = useStore();

  return (
    <>
      UserCount {users.length}
    </>
  )
};

export default FeatUserCount;

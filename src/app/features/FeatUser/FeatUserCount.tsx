import { FC, useContext } from "react";
// import { useUsers } from "./hooks/use-users.hook";
import { Random } from "./context/random";
import { User } from "./logic/interface";

interface FeatUserCountProps { }

const FeatUserCount: FC<FeatUserCountProps> = () => {

  // const { users } = useUsers();
  const users: User[] = [];

  return (
    <>
      UserCount {users.length}
    </>
  )
};

export default FeatUserCount;

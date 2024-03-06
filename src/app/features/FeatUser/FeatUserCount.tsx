import { FC, useContext } from "react";
import { useUsers } from "./hooks/use-users.hook";
import { Random } from "./context/random";

interface FeatUserCountProps { }

const FeatUserCount: FC<FeatUserCountProps> = () => {

  const { users } = useUsers();
  
  const rand = useContext(Random);
  console.warn(rand)

  return (
    <>
      UserCount {users.length}
    </>
  )
};

export default FeatUserCount;

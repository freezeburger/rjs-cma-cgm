import { FC } from "react";
// import { useUsers } from "./hooks/use-users.hook";
import { useStore } from "./store";
import { createPortal } from "react-dom";


interface FeatUserCountProps { }

const FeatUserCount: FC<FeatUserCountProps> = () => {

  // const { users } = useUsers();
  const { state: users, /* dispatch */ } = useStore();

  return (
    <>
      {createPortal(
        <>UserCount {users.length}</>,
        window.cgm
      )
      }

    </>
  )
};

export default FeatUserCount;

import { useEffect, useState } from "react"
import { User } from "../logic/interface"
import { fecthUsers } from "../logic/fetch-users"

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);

    console.log('A new state is created')

    useEffect(() => {
        fecthUsers().then(setUsers)
        return () => console.log('On component unmounted or re trigger ')
    }, [/* retrigger dependency */])

    return { users };
}
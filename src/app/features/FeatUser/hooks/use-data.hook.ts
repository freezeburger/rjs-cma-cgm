import { useEffect, useState } from "react"
import { fecthUsers } from "../logic/fetch-users"
import { User } from "../logic/interface";
import { fecthMessages } from "../logic/fetch-messages";


export const useData= () => {

    const [data, setData] = useState<{messages:unknown[],users:User[]}>({messages:[],users:[]});

    useEffect(() => {
        Promise
            .all( [fecthUsers(),fecthMessages()] )
            .then(([users,messages]) => setData({users,messages}))
    }, [])

    return { data };
}
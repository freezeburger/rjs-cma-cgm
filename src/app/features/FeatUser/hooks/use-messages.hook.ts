import { useEffect, useState } from "react"
import { fecthUsers } from "../logic/fetch-users"

export const useMessages= () => {

    const [messages, setMessages] = useState<unknown[]>([]);

    useEffect(() => {
        fecthUsers().then(setMessages)
    }, [])

    return { messages };
}
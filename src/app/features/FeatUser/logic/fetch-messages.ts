import axios from "axios";

const ENDPOINT = 'http://localhost:5050/messages';

export const fecthMessages = () => {
    return axios.get(ENDPOINT).then<unknown[]>( response => response.data  )
}
import axios from "axios";
import { User } from "./interface";

const ENDPOINT = 'http://localhost:5050/users';

export const fecthUsers = () => {
    return axios.get(ENDPOINT).then<User[]>( response => response.data  )
}
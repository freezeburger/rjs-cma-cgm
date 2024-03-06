import { Tuple, configureStore } from "@reduxjs/toolkit";
import { fecthUsers } from "../logic/fetch-users";
import { User } from "../logic/interface";
import { useEffect, useState } from "react";

// Original state on startup
const initialState:User[] = [];

// What is an action
interface FeatAction{
    type:ActionTypes;
    payload?:unknown;
}

// What is possible to ask
export enum ActionTypes{
    USER_LIST_REQUEST = 'ActionTypes:USER_LIST_REQUEST',
    USER_LIST_UPDATE = 'ActionTypes:USER_LIST_UPDATE'
}

// Mutating the state SYNCHRONOUSLY
const mutateState /* reducer */ = ( state = initialState, action:FeatAction) => {

    switch (action.type) {
        case ActionTypes.USER_LIST_UPDATE:          
            return action.payload;
        default:
            return state;
    }
}

// Perform Asynchronous task
const processAsync /* middleware */ = store => next => action => {
    next(action);

    console.log(action)

    if(action.type === ActionTypes.USER_LIST_REQUEST){
        fecthUsers().then( data => store.dispatch({type:ActionTypes.USER_LIST_UPDATE, payload:data}))
    }
    
} 


const store = configureStore({
    preloadedState:initialState,
    reducer:mutateState,
    middleware:() => new Tuple(processAsync) ,
    devTools:{
        name:'User Store'
    }
})



export const useStore = () => {
    const [state, setState] = useState(store.getState() )

    useEffect( () => store.subscribe( () => setState( store.getState() ) ))

    return [ state, store.dispatch ];
}
import { Dispatch, Middleware, Reducer, Tuple, configureStore } from "@reduxjs/toolkit";
import { fecthUsers } from "../logic/fetch-users";
import { User } from "../logic/interface";
import { useEffect, useState, useSyncExternalStore } from "react";

// Original state on startup
const initialState: User[] = [];

// What is an action
interface FeatAction {
    type: ActionTypes;
    payload?: unknown;
}

// What is possible to ask
export enum ActionTypes {
    USER_LIST_REQUEST = 'ActionTypes:USER_LIST_REQUEST',
    USER_LIST_PROCESSING = 'ActionTypes:USER_LIST_PROCESSING',
    USER_LIST_UPDATE = 'ActionTypes:USER_LIST_UPDATE'
}

// Mutating the state SYNCHRONOUSLY
const mutateState: Reducer<User[], FeatAction> /* reducer */ = (state = initialState, action: FeatAction):User[] => {
    //console.table( {origin:'reducer', ...action} )

    switch (action.type) {
        case ActionTypes.USER_LIST_UPDATE:
            return action.payload as User[];
        default:
            return state;
    }
}

interface AppMiddleware extends Middleware< (action: FeatAction) => void, User[], Dispatch<FeatAction>>{
}


// Perform Asynchronous task
const processAsync: AppMiddleware = (store ) => ( next ) => (action) => {
    // console.table( {origin:'middleware', ...action as FeatAction} )

    if ((action as FeatAction).type === ActionTypes.USER_LIST_REQUEST) {
        next({...action as FeatAction, type:ActionTypes.USER_LIST_PROCESSING});
        fecthUsers().then(data => store.dispatch({ type: ActionTypes.USER_LIST_UPDATE, payload: data }))
    }else{
        next(action);
    }

}


const store = configureStore({
    preloadedState: initialState,
    reducer: mutateState,
    middleware: () => new Tuple(processAsync),
    devTools: {
        name: 'User Store'
    }
})



export const useStore = () => {

    // useSyncExternalStore could do it
    const [state, setState] = useState(store.getState())
    useEffect(() => store.subscribe(() => setState(store.getState())))

    return {state, dispatch:store.dispatch};
} 


/* export const useStore = () =>{
    const state = useSyncExternalStore(store.subscribe, store.getState)
    return {state, dispatch:store.dispatch};
} */
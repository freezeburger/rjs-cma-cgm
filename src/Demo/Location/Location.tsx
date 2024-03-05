/* eslint-disable @typescript-eslint/no-unused-vars */
import  { ChangeEventHandler, useState } from "react";
import rootReducer, { save } from "./LocationStore";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { configureStore, createStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from '@redux-devtools/extension';

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
const useAppDispatch: DispatchFunc = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function Location() {
    
    const [locationName, setLocationName] = useState('');
    const dispatch = useDispatch();
    const location = useAppSelector(state=>state.location)
    
    const handleData:ChangeEventHandler<HTMLInputElement> = (e) => {
        setLocationName( (e.target as HTMLInputElement)?.value );
    }

    const handleSave = () => {

        const ifPrestent = location.includes(locationName);

        if(locationName !== undefined && !ifPrestent) {
            dispatch(save(locationName));
            setLocationName('')
        } else {
            setLocationName('')
        }
    }
    return (
        <Box>
            <Box>
                <TextField 
                    onChange={handleData} 
                    value={locationName} 
                    label="Enter location name"
                />
                <Button
                    style={{margin: '10px'}}
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    add
                </Button>
            </Box>
            <Box>
                <h3> List of locations </h3>
            </Box>
            <Box>
                 {location.map((item:string, idx:number) => <li key={idx}>{item}</li>) }
            </Box>
        </Box>
    );
}
/*
const composeEnhancers = composeWithDevTools({name:'DEMO'});

const greetEnhancer = (createStore) => {
    return (reducer, state, enhancer) => {
        // create a store
        const store = createStore(reducer, state, enhancer)

        // create a "Dispatch enhancer"
        const newDispatch = (action) => {
            const result = store.dispatch(action)
            // add some logic after dispatch any action
            console.log('Do something here :D')
            return result
        }

        return {
            ...store,
            dispatch: newDispatch
        }
    }
}*/

const store = configureStore({
    reducer: rootReducer,
    devTools:{
        name:'DEMO'
    }
    // enhancers:(getDefaultEnhancers) => getDefaultEnhancers().concat(greetEnhancer)
});




 const LocationProvider = () => (
    <Provider store={store}>
        <Location />
    </Provider> 
)

export default LocationProvider;
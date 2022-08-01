import React, { createContext, useContext, useReducer} from 'react';

//Prepares the dataLayer
export const stateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);

//pull information from the data Layer
export const useStateValue = () => useContext(stateContext)
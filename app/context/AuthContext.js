"use client";
import { createContext, useEffect, useState, useContext } from 'react'

const AppContext = createContext('Hello')

export const AppWrapper = ({ children }) => {
    const [state, setState] = useState({hello: 'Mahmoud'})

    return(
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
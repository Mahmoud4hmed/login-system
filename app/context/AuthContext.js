"use client";
import { createContext, useEffect, useState, useContext } from 'react'
import { jwtDecode } from "jwt-decode";

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
    
    const [state, setState] = useState({hello: 'Mahmoud'})
    const [AuthTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState('next')

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value,
                'password': e.target.password.value
            })
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
        } else {
            alert('something went wrong!')
        }
    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return(
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
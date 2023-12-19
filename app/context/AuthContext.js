'use client';
import { createContext, useEffect, useState, useContext } from 'react'
import { jwtDecode } from "jwt-decode";


const AppContext = createContext()

export const AppWrapper = ({ children }) => {
    
    // const [state, setState] = useState({hello: 'Mahmoud'})
    const [AuthTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    const [loading, setLoading] = useState(true)

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
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            alert('something went wrong!')
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    let updateUser = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'refresh': AuthTokens?.refresh
            })
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        AuthTokens:AuthTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    useEffect(()=>{

        if(loading){
            updateUser()
        }

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=> {
            if (AuthTokens) {
                updateUser()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AuthTokens, loading])

    return(
        <AppContext.Provider value={contextData}>
            {loading ? null : children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
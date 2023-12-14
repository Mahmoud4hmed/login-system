"use client";
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import PrivateRoute from '../components/PrivateRoute'

function Admin() {
    const [counter, setCounter] = useState(0);
    const [success, setSuccess] = useState(false)

    const increment = () => {
        setCounter(counter + 1);
        if(counter === 9){
            setSuccess(true)
        }
    }

    return (
        <main className="p-10 flex flex-col items-left">
            <h5 className="text-3xl">Welcome to admin panel</h5>
            <Link href="/" className="mt-5 underline cursor-pointer w-20">Go Home</Link>
            <p className="mt-5">Users Count: {counter}</p>
        <button className="mt-5 bg-green-500 w-24 rounded-sm hover:rounded-md hover:bg-white hover:text-black duration-500" onClick={increment}>Increment</button>
        </main>
    )
}

export default PrivateRoute(Admin)

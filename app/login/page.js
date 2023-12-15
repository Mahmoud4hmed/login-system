"use client";
import React, { useContext } from 'react'
import { useAppContext } from '../context/AuthContext'

function Login() {
  let { loginUser } = useAppContext()
  return (
    <div className="flex min-h-screen flex-col items-center pt-20">
      <h1 className="pb-10 text-3xl">Login</h1>
      <form className="flex flex-col " onSubmit={loginUser}>
        <label>
          username
        </label>
          <input className="rounded-md border hover:rotate-1 hover:scale-105 duration-200 text-black border-blue-500 p-1" type="text" name="username" placeholder="username" />
          <br />

        <label>
          Password
        </label>
          <input className="rounded-md border hover:rotate-1 hover:scale-105 duration-200 text-black border-blue-500 p-1" type="password" name="password" placeholder="password" />
          <br />
        <button className="rounded-md border hover:scale-110 hover:shadow-sm hover:shadow-blue-500 text-xl duration-200 w-20 self-center text-white border-blue-500" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login

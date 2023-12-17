'use client';
import React from 'react'
import Link from 'next/link'
import { useAppContext } from '../context/AuthContext'

function Navbar() {
  const { user, logoutUser } = useAppContext()
  return (
    <nav className="border-b border-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Login-System</div>
        <div className="space-x-4">
          <Link href="/" className="text-white font-bold">Home</Link>
          <Link href="/admin" className="text-white">Admin</Link>
      { !user ? <Link href="/login" className="text-white">Login</Link> : <button onClick={logoutUser} className="text-red-500">Logout</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

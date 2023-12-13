import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="border-b border-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Login-System</div>
        <div className="space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/login" className="text-white">Login</Link>
          <Link href="#" className="text-white">Services</Link>
          <Link href="#" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

"use client";
import Image from 'next/image'
import Login from './login/page'
import { useAppContext } from './context/AuthContext'

export default function Home() {
  const { user } = useAppContext()
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <h1 className="pb-10 text-3xl">{user && <p>Hello {user.username}!</p> }</h1>
    </main>
  )
}

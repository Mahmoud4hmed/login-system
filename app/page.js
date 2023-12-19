"use client";
import { useAppContext } from './context/AuthContext'
import { useEffect, useState } from 'react'
import PrivateRoute from './components/PrivateRoute'

function Home() {
  const { user, AuthTokens, logoutUser } = useAppContext()
  let [notes, setNotes] = useState([])

  useEffect(() => {
    {AuthTokens ? getNotes() : null}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(AuthTokens.access)
      }
    })
    let data = await response.json()
    if(response.status === 200){
      setNotes(data)
    } else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <h1 className="pb-10 text-3xl">{user && <p>Hello {user.username}!</p> }</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </main>
  )
}

export default PrivateRoute(Home)
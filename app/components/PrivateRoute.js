"use client";
import React from 'react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useAppContext } from '../context/AuthContext'

function PrivateRoute(Component) {
  return function PrivateRoute(props) {
    const { user } = useAppContext();
    const auth = user;

    useEffect(() => {
      if(!auth){
        redirect('/login');
      }
    }, [auth])

    if(!auth){
      return null;
    }

    return <Component {...props} />
  }
}
export default PrivateRoute

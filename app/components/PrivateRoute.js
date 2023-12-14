import React from 'react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

function PrivateRoute(Component) {
  return function PrivateRoute(props) {
    const auth = true;

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

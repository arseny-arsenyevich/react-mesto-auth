import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute ({ loggedIn, children }) {
    return (
        <Route>
            {()=>
                loggedIn ? children : <Redirect to='/sign-up' />
            }
        </Route>
    )
}

export default ProtectedRoute
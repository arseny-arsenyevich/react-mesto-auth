import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute ({ path, loggedIn, children }) {
    return (
        <Route path={path}>
            {(loggedIn !== null) && (loggedIn ? children : <Redirect to='/sign-up' />) }
        </Route>
    )
}

export default ProtectedRoute
import React from 'react'
import { useRouteError } from 'react-router-dom'
function Errorpage() {
     const error = useRouteError()
    return (
        <div style={{ padding: "2rem" }}>
      <h1>Oops 😬</h1>
      <p>Something went wrong.</p>
      <p style={{ color: "red" }}>
        {error.statusText || error.message}
      </p>
    </div>
    )
}

export default Errorpage

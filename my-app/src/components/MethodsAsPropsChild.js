import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! You are now signed in</p>
                        <button onClick={props.handleSignOut}>Sign out</button>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in</p>
                        <button onClick={props.handleSignIn}>Sign in</button>
                    </div>
                )
            }
    </div>
  )
}

export default MethodsAsPropsChild